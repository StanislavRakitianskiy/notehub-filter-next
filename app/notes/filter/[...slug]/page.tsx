type Props = {
    params: Promise<{ slug: string[]}>,
}
const NotyByCategory = async ({params}: Props) => {
    const {slug} = await params;
    return (
        <div>Hello</div>
    )
}
export default NotyByCategory;