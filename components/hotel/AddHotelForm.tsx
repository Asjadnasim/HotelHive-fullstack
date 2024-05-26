'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Hotel, Room } from '@prisma/client';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Checkbox } from '../ui/checkbox';

interface AddHotelProps {
	hotel: HotelWithRooms | null;
}

export type HotelWithRooms = Hotel & { rooms: Room[] };

const formSchema = z.object({
	title: z.string().min(3, {
		message: 'Title must be atleast 3 characters long.',
	}),
	description: z.string().min(10, {
		message: 'Description must be atleast 10 characters long.',
	}),
	image: z.string().min(1, {
		message: 'Image is required.',
	}),
	country: z.string().min(3, {
		message: 'Country is required.',
	}),
	state: z.string().optional(),
	city: z.string().optional(),
	locationDescription: z.string().min(10, {
		message: 'Description must be atleast 10 characters long.',
	}),
	gym: z.boolean().optional(),
	spa: z.boolean().optional(),
	bar: z.boolean().optional(),
	laundry: z.boolean().optional(),
	restaurant: z.boolean().optional(),
	shopping: z.boolean().optional(),
	freeParking: z.boolean().optional(),
	bikeRental: z.boolean().optional(),
	freeWifi: z.boolean().optional(),
	movieNights: z.boolean().optional(),
	swimmingPool: z.boolean().optional(),
	coffeeShop: z.boolean().optional(),
});

const AddHotelForm = ({ hotel }: AddHotelProps) => {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			title: '',
			description: '',
			image: '',
			country: '',
			state: '',
			city: '',
			locationDescription: '',
			gym: false,
			spa: false,
			bar: false,
			laundry: false,
			restaurant: false,
			shopping: false,
			freeParking: false,
			bikeRental: false,
			freeWifi: false,
			movieNights: false,
			swimmingPool: false,
			coffeeShop: false,
		},
	});

	function onSubmit(values: z.infer<typeof formSchema>) {
		console.log(values);
	}

	return (
		<div>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
					<h3 className='text-2xl font-bold text-center'>
						{hotel ? 'Update Your Hotel!' : 'Create Your Hotel!'}
					</h3>
					<div className='flex flex-col md:flex-row gap-6'>
						<div className='flex-1 flex flex-col gap-6'>
							<FormField
								control={form.control}
								name='title'
								render={({ field }) => (
									<FormItem>
										<FormLabel className='text-xl font-semibold'>
											Hotel Title
										</FormLabel>
										<FormDescription className='text-lg font-semibold mx-auto pb-1'>
											Provide your hotel name
										</FormDescription>
										<FormControl>
											<Input placeholder='Beach Hotel' {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name='description'
								render={({ field }) => (
									<FormItem>
										<FormLabel className='text-xl font-semibold'>
											Hotel Description
										</FormLabel>
										<FormDescription className='text-lg font-semibold mx-auto pb-1'>
											Provide a detailed description of your hoptel
										</FormDescription>
										<FormControl>
											<Textarea
												placeholder='Welcome to Beach Hotel, where the rhythm of the waves and the whisper of the sea breeze beckon you to unwind in paradise. Nestled along the pristine shoreline, our hotel offers a haven of luxury and relaxation, where every moment is infused with the serenity of coastal living.'
												{...field}
												className='text-sm font-semibold mx-auto pb-1'
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<div>
								<FormLabel>Choose Amenities</FormLabel>
								<FormDescription>
									Choose Amenities popular in your hotel
								</FormDescription>
								<div className='grid grid-cols-2 gap-4 mt-2'>
									<FormField
										control={form.control}
										name='gym'
										render={({ field }) => (
											<FormItem className='flex flex-row items-end space-x-3 rounded-md border-4 border-black/20 p-4'>
												<FormControl>
													<Checkbox
														checked={field.value}
														onCheckedChange={field.onChange}
													/>
												</FormControl>
												<FormLabel>Gym</FormLabel>
											</FormItem>
										)}
									/>
									<FormField
										control={form.control}
										name='spa'
										render={({ field }) => (
											<FormItem className='flex flex-row items-end space-x-3 rounded-md border-4 border-black/20 p-4'>
												<FormControl>
													<Checkbox
														checked={field.value}
														onCheckedChange={field.onChange}
													/>
												</FormControl>
												<FormLabel>Spa</FormLabel>
											</FormItem>
										)}
									/>
									<FormField
										control={form.control}
										name='bar'
										render={({ field }) => (
											<FormItem className='flex flex-row items-end space-x-3 rounded-md border-4 border-black/20 p-4'>
												<FormControl>
													<Checkbox
														checked={field.value}
														onCheckedChange={field.onChange}
													/>
												</FormControl>
												<FormLabel>Bar</FormLabel>
											</FormItem>
										)}
									/>
									<FormField
										control={form.control}
										name='laundry'
										render={({ field }) => (
											<FormItem className='flex flex-row items-end space-x-3 rounded-md border-4 border-black/20 p-4'>
												<FormControl>
													<Checkbox
														checked={field.value}
														onCheckedChange={field.onChange}
													/>
												</FormControl>
												<FormLabel>Laundry</FormLabel>
											</FormItem>
										)}
									/>
									<FormField
										control={form.control}
										name='restaurant'
										render={({ field }) => (
											<FormItem className='flex flex-row items-end space-x-3 rounded-md border-4 border-black/20 p-4'>
												<FormControl>
													<Checkbox
														checked={field.value}
														onCheckedChange={field.onChange}
													/>
												</FormControl>
												<FormLabel>Restaurant</FormLabel>
											</FormItem>
										)}
									/>
									<FormField
										control={form.control}
										name='shopping'
										render={({ field }) => (
											<FormItem className='flex flex-row items-end space-x-3 rounded-md border-4 border-black/20 p-4'>
												<FormControl>
													<Checkbox
														checked={field.value}
														onCheckedChange={field.onChange}
													/>
												</FormControl>
												<FormLabel>Shopping</FormLabel>
											</FormItem>
										)}
									/>
									<FormField
										control={form.control}
										name='freeParking'
										render={({ field }) => (
											<FormItem className='flex flex-row items-end space-x-3 rounded-md border-4 border-black/20 p-4'>
												<FormControl>
													<Checkbox
														checked={field.value}
														onCheckedChange={field.onChange}
													/>
												</FormControl>
												<FormLabel>Free Parking</FormLabel>
											</FormItem>
										)}
									/>
									<FormField
										control={form.control}
										name='bikeRental'
										render={({ field }) => (
											<FormItem className='flex flex-row items-end space-x-3 rounded-md border-4 border-black/20 p-4'>
												<FormControl>
													<Checkbox
														checked={field.value}
														onCheckedChange={field.onChange}
													/>
												</FormControl>
												<FormLabel>Bike Rental</FormLabel>
											</FormItem>
										)}
									/>
									<FormField
										control={form.control}
										name='freeWifi'
										render={({ field }) => (
											<FormItem className='flex flex-row items-end space-x-3 rounded-md border-4 border-black/20 p-4'>
												<FormControl>
													<Checkbox
														checked={field.value}
														onCheckedChange={field.onChange}
													/>
												</FormControl>
												<FormLabel>Free Wifi</FormLabel>
											</FormItem>
										)}
									/>
									<FormField
										control={form.control}
										name='movieNights'
										render={({ field }) => (
											<FormItem className='flex flex-row items-end space-x-3 rounded-md border-4 border-black/20 p-4'>
												<FormControl>
													<Checkbox
														checked={field.value}
														onCheckedChange={field.onChange}
													/>
												</FormControl>
												<FormLabel>Movie Nights</FormLabel>
											</FormItem>
										)}
									/>
									<FormField
										control={form.control}
										name='swimmingPool'
										render={({ field }) => (
											<FormItem className='flex flex-row items-end space-x-3 rounded-md border-4 border-black/20 p-4'>
												<FormControl>
													<Checkbox
														checked={field.value}
														onCheckedChange={field.onChange}
													/>
												</FormControl>
												<FormLabel>Swimmingpool</FormLabel>
											</FormItem>
										)}
									/>
									<FormField
										control={form.control}
										name='coffeeShop'
										render={({ field }) => (
											<FormItem className='flex flex-row items-end space-x-3 rounded-md border-4 border-black/20 p-4'>
												<FormControl>
													<Checkbox
														checked={field.value}
														onCheckedChange={field.onChange}
													/>
												</FormControl>
												<FormLabel>Coffee Shop</FormLabel>
											</FormItem>
										)}
									/>
								</div>
							</div>
						</div>
						<div className='flex-1 flex flex-col gap-6'>Part-2</div>
					</div>
				</form>
			</Form>
		</div>
	);
};

export default AddHotelForm;
