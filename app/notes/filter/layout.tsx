type Props = {
    children: React.ReactNode;
    sidebar: React.ReactNode;
}

const NotesLayout = ({children, sidebar}: Props) => {
    return (
        <section>
            {sidebar}
            {children}
        </section>
    )
}
export default NotesLayout;