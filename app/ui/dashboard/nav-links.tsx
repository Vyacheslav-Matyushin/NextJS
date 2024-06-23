'use client';
 
import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
 
// ...
 
export default function NavLinks() {
  const pathname = usePathname();

  return (
	<nav className="flex flex-col space-y-1">
	  <Link
		href="/dashboard"
		className={clsx(
		  'flex items-center rounded-md p-2 text-sm font-medium',
		  {
			'bg-blue-600 text-white': pathname === '/dashboard',
			'text-blue-600 hover:bg-blue-500 hover:text-white': pathname !== '/dashboard',
		  },
		)}
	  >
		<HomeIcon className="w-5" />
		<span className="ml-3 hidden md:block">Home</span>
	  </Link>
	  <Link
		href="/dashboard/customers"
		className={clsx(
		  'flex items-center rounded-md p-2 text-sm font-medium',
		  {
			'bg-blue-600 text-white': pathname === '/dashboard/customers',
			'text-blue-600 hover:bg-blue-500 hover:text-white': pathname !== '/dashboard/customers',
		  },
		)}
	  >
		<UserGroupIcon className="w-5" />
		<span className="ml-3 hidden md:block">Customers</span>
	  </Link>
	  <Link
		href="/dashboard/invoices"
		className={clsx(
		  'flex items-center rounded-md p-2 text-sm font-medium',
		  {
			'bg-blue-600 text-white': pathname === '/dashboard/invoices',
			'text-blue-600 hover:bg-blue-500 hover:text-white': pathname !== '/dashboard/invoices',
		  },
		)}
	  >
		<DocumentDuplicateIcon className="w-5" />
		<span className="ml-3 hidden md:block">Invoices</span>
	  </Link>
	</nav>
  );
}