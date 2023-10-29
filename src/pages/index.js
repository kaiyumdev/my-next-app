import { Button } from "antd";
import Link from "next/link";
import RootLayout from "../components/Layouts/RootLayout";

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to news page</h1>
      <Button type="primary">
        <Link href="/">Home</Link>
      </Button>
    </div>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
