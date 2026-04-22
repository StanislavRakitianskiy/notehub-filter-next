import { fetchNoteById } from "@/lib/api";
import NotePreview from "./NotePreview.client";
import { QueryClient, HydrationBoundary, dehydrate } from "@tanstack/react-query";
type Props = {
    params: Promise<{ id: string }>
}
const NotePreviewModal = async ({ params }: Props) => {
    const { id } = await params;
    const queryClient = new QueryClient();
    await queryClient.prefetchQuery({
        queryKey: ["article", id],
        queryFn: () => fetchNoteById(id),
    })

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <NotePreview id={id} />
        </HydrationBoundary>
    )
}
export default NotePreviewModal;