import fsType from "fs";
const fs: typeof fsType = require('fs');

import pathType from "path";
const path: typeof pathType = require('path');

interface ConfigPair {
    key: string,
    value: string,
}
const templateConfigPath = path.resolve(__dirname, path.relative(__dirname, 'resources/private.py'))
const configPath = path.resolve(__dirname, path.relative(__dirname, 'resources/bot/private.py'));



export default class PrivateConfigService {

    static privates: ConfigPair[] = this.getPrivates();

    static getPrivates(): ConfigPair[] {
        if(!fs.existsSync(configPath)) fs.copyFileSync(templateConfigPath, configPath);

        const buffer = fs.readFileSync(configPath);
        const arr = buffer.toString().split("\r\n").map((line) => {
            const [key, value] = line.trim().split('=');

            return {
                key,
                value: value.replaceAll("\"", ''),
            }
        })
        return arr;
    }

    static getPair(key: string) {
        return this.privates.find(({ key: configKey }) => configKey == key);
    }

    static getValue(key: string) {
        const configPair = this.getPair(key);
        return configPair?.value;
    }


    static setValue(key: string, value: string) {
        const buffer = fs.readFileSync(configPath);

        const regex = new RegExp(key + "=\".*\"");
        const lineResult = `${key}=\"${value}\"`;

        const newBuffer = buffer.toString().replace(regex, lineResult);

        fs.writeFileSync(configPath, newBuffer)
        this.setPair(key, value);
    }

    static setPair(key: string, value: string) {
        this.privates.map((pair, _) => {
            if (pair.key == key) pair.value = value;
            return pair;
        })
    }
}