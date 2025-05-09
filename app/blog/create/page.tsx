'use client';
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";



export default function CreateBlog() {
    const editor = useEditor({
        extensions: [StarterKit],
        content: "<p>Hello World!</p>",
    });
  return (
    <div className="flex flex-col border bg-gray-200">
      <h2 className="m-auto text-3xl">Create new Blog</h2>
      <form className="" action={"submit"}>
        <div className="flex flex-col max-w-lg m-auto">
          <label>Title</label>
          <input className="border g-3" type="text" placeholder="Title" />
        </div>
        <div className="flex flex-col max-w-lg m-auto">
          <label htmlFor="">Content</label>
          <EditorContent editor={editor} />
        </div>
        <div className="flex flex-col max-w-lg m-auto">
          <label htmlFor="">Content</label>
          <input type="textArea" placeholder="Content" />
        </div>
      </form>
    </div>
  );
}
