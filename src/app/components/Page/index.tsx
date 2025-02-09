import Component from "./component";

type Props = {
    children?: React.ReactNode;
};

const Page = (props: Props) => {
    return <Component {...props} />;
};

export default Page;