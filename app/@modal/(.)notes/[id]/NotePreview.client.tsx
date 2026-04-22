'use client';
import Modal from "@/components/Modal/Modal";
import { useQuery } from "@tanstack/react-query";
import { fetchNoteById } from "@/lib/api";
import { useRouter } from "next/navigation";
import css from "./NotePreview.module.css";

type Props = {
    id: string
}

const NotePreview = ({ id }: Props) => {
    const router = useRouter();
    const { data: note } = useQuery({
        queryKey: ["article", id],
        queryFn: () => fetchNoteById(id),
    })

    return (
        <Modal onClose={() => router.back()}>
            <div className={css.main}>
                <div className={css.container}>
                    {note && (
                        <div className={css.item}>
                            <div className={css.header}>
                                <h2>{note.title}</h2>
                            </div>
                            <p className={css.tag}>{note.tag}</p>
                            <p className={css.content}>{note.content}</p>
                            <p className={css.date}>{note.createdAt}</p>
                        </div>
                    )}
                </div>
            </div>
        </Modal>
    )
}
export default NotePreview