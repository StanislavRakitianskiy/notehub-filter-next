import NoteClient from './Notes.client';
import { NoteTag } from "@/types/note";
import {
  QueryClient,
  HydrationBoundary,
  dehydrate,
} from "@tanstack/react-query";
import { fetchNotes } from "@/lib/api";
type Props = {
  params: Promise<{ slug: string[] }>;
};
const NotyByCategory = async ({ params }: Props) => {
  const { slug } = await params;
  const category = slug?.[0] ?? 'all';
  const tagParam = category === 'all' ? undefined : (category as NoteTag);
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["article", 1, '', category ?? 'all'],
    queryFn: () => fetchNotes({ page: 1, perPage: 12, tag: tagParam }),
  });

  return (<HydrationBoundary state={dehydrate(queryClient)}>
    <NoteClient category={tagParam} />
  </HydrationBoundary>);
};
export default NotyByCategory;
