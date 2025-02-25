import Banner from '@/components/home/Banner';
import NewestBooks from '@/components/research/NewestBooks';
import CommonLayout from '@/layouts/CommonLayout';

const Page = () => {
  return (
    <CommonLayout>
      <Banner />
      <NewestBooks />
    </CommonLayout>
  );
};

export default Page;
