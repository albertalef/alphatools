import OpenSeaApiHandler from "@renderer/api/OpenSeaApiHandler";
import ButtonWrapper from "@renderer/components/buttons/ButtonWrapper";
import { styled } from "@renderer/config/stitches.config";
import useDebounce from "@renderer/hooks/useDebounce";
import { InfoTask, SlugData } from "@renderer/interfaces/AutoBidInterfaces";
import { addTask } from "@renderer/redux/autoBid/autoBidCreationSlice";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { HiPlusSm } from "react-icons/hi";
import { useQuery } from "react-query";
import { useDispatch } from "react-redux";
import InputField from "../../../../../components/inputs/InputField";

type FormInputs = {
	slug: string,
	priceLimit: number,
	percent: number,
}
export default function InputWrapper() {
	const dispatch = useDispatch();

	const [floorPrice, setFloorPrice] = useState(0);
	const [startBid, setStartBid] = useState(0);

	const { register,
		handleSubmit,
		watch,
		formState: { errors },
		setValue,
		setError,
		clearErrors,
		resetField } = useForm<FormInputs>({
			defaultValues: {
				slug: '',
				priceLimit: 0,
				percent: 5
			},
		});

	const [debouncedSlug, isDebouncing, resetDebouncedValue] = useDebounce(watch('slug'), 740);
	const { data, isError, isLoading } = useQuery<SlugData>(['autoBid', debouncedSlug], () => OpenSeaApiHandler.getSlugData(debouncedSlug),
		{
			onError() { if (!isDebouncing) setError('slug', { type: 'invalidSlug' }) },
			enabled: !!debouncedSlug,
			retry: false,
		});


	useEffect(() => {
		if (data && !isLoading) {
			setValue('priceLimit', Number((data.startBid + 0.00001).toFixed(5)));
			setFloorPrice(data.floorPrice);
			setStartBid(data.startBid);
		}
	}, [data, debouncedSlug])

	useEffect(() => clearErrors('slug'), [isDebouncing])
	function onSubmit(data: FormInputs) {
		if (isLoading || isDebouncing) return;
		if (isError) setError('slug', { type: 'invalidSlug' });
		else {
			const task: InfoTask = { ...data, floorPrice, startBid };
			dispatch(addTask(task));
			resetField('slug');
			resetField('priceLimit');
			resetField('percent');

			resetDebouncedValue();
			setFloorPrice(0)
			setStartBid(0)
		}
	}
	return (
		<Wrapper onSubmit={handleSubmit(onSubmit)} noValidate>
			<InputField
				divStyle={{ gridColumn: '1/3' }}
				label='Slug'
				register={register('slug', { required: true })}
				isError={!!errors.slug}
			/>
			<InputField
				divStyle={{ gridColumn: '3/5' }}
				label='Price Limit'
				type={'number'}
				min={0}
				step={0.00001}
				setValue={setValue}
				register={register('priceLimit', { required: true, min: 0 })}
				isError={!!errors.priceLimit}
				isLoading={isLoading && !isDebouncing}
			/>
			<InputField label='Floor Price' type={'number'} value={floorPrice} isLoading={isLoading && !isDebouncing} readOnly />
			<InputField label='Start Bid' type={'number'} value={startBid} isLoading={isLoading && !isDebouncing} readOnly />
			<InputField
				label='Percent'
				type={'number'}
				min={1}
				step={1}
				setValue={setValue}
				register={register('percent', { min: 1, required: true})}
				isError={!!errors.percent}

			/>
			<AddButton >
				<HiPlusSm />
			</AddButton>
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
const AddButton = styled(ButtonWrapper, {

	borderRadius: 5,
	background: '#293034',

	hover: {
		background: '#30383C',

	}
})