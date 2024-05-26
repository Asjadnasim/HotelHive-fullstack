'use client';

import { UserButton, useAuth } from '@clerk/nextjs';
import Container from '../Container';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Button } from '../ui/button';
import SearchInput from '../SearchInput';
import { Toggle } from '../Toggle';
import { NavMenu } from './NavMenu';

const Navbar = () => {
	const router = useRouter();
	const { userId } = useAuth();
	return (
		<div className='sticky top-0 border border-b-primary/10 bg-secondary flex'>
			<Container>
				<div className='flex items-center justify-between'>
					<div
						className='flex items-end gap-1 cursor-pointer'
						onClick={() => router.push('/')}
					>
						<Image src={'/logo.svg'} alt='logo' width={40} height={30} />
						<div className='font-bold text-xl'>HotelHive</div>
					</div>
					<SearchInput />
					<div className='flex items-center justify-end gap-3'>
						<div className='flex gap-5 mr-2'>
							<Toggle />
							<NavMenu />
						</div>
						<UserButton afterSignOutUrl='/' />
						{!userId && (
							<>
								<Button
									onClick={() => router.push('/sign-in')}
									variant={'outline'}
									size={'sm'}
								>
									Sign in
								</Button>
								<Button onClick={() => router.push('/sign-up')} size={'sm'}>
									Sign up
								</Button>
							</>
						)}
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Navbar;
