import InputField from "@renderer/components/inputs/InputField";
import { styled } from "@renderer/config/stitches.config";

export default function InputWrapper() {

	return (
		<Wrapper noValidate>
			<InputField
				divStyle={{ gridColumn: '1/3' }}
				label='Slug'
			/>
			<InputField
				divStyle={{ gridColumn: '3/5' }}
				label='Price Limit'
				type={'number'}
				step={0.0001}
			/>
			<InputField label='Floor Price' type={'number'} readOnly />
			<InputField label='Start Bid' type={'number'} readOnly />
			<InputField
				divStyle={{ gridColumn: '3/5' }}
				label='Percent'
				type={'number'}
				min={0}
				step={5}
			/>
		</Wrapper>
	)
}



const Wrapper = styled('form', {
	maxWidth: 597,
	display: "grid",
	gap: 12,

	gridTemplateColumns: 'minmax(0, 39%) minmax(0, 30.3%) minmax(0, 23%) minmax(0, 8%)',
	gridTemplateRows: '36px 36px',

	"@sm": {
		maxWidth: 'unset',
	}
})
