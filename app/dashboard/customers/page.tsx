import { fetchFilteredCustomers } from '@/app/lib/data';
import CustomersTable from '@/app/ui/customers/table';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Customers',
};

async function Page({ searchParams }: { searchParams?: { query?: string } }) {
  const query = searchParams?.query || '';
  const customers = await fetchFilteredCustomers(query);

  return (
    <div className="w-full">
      <CustomersTable customers={customers} />
    </div>
  );
}

export default Page;
