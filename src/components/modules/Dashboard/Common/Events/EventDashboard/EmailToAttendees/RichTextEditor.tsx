/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";

const ToolbarButton = ({ active, onClick, children }: any) => (
  <button
    onClick={onClick}
    className={`px-3 py-1 rounded border text-sm 
      ${active ? "bg-blue-600 text-white" : "bg-white hover:bg-gray-200"} 
    `}
  >
    {children}
  </button>
);

const RichTextEditor = ({ value, onChange }: { value: any; onChange: any }) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: "Write your event description...",
      }),
    ],
    content: value,
    onUpdate({ editor }) {
      onChange(editor.getHTML());
    },
    immediatelyRender: false,
  });

  if (!editor) return null;

  return (
    <div className="rounded-lg border bg-gray-100 shadow-sm text-black">
      {/* Toolbar */}
      <div className="flex gap-2 p-2 border-b bg-gray-200">
        <ToolbarButton
          active={editor.isActive("bold")}
          onClick={() => editor.chain().focus().toggleBold().run()}
        >
          B
        </ToolbarButton>

        <ToolbarButton
          active={editor.isActive("italic")}
          onClick={() => editor.chain().focus().toggleItalic().run()}
        >
          I
        </ToolbarButton>

        <ToolbarButton
          active={editor.isActive("heading", { level: 1 })}
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
        >
          H1
        </ToolbarButton>

        <ToolbarButton
          active={editor.isActive("heading", { level: 2 })}
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
        >
          H2
        </ToolbarButton>

        <ToolbarButton
          active={editor.isActive("bulletList")}
          onClick={() => editor.chain().focus().toggleBulletList().run()}
        >
          • List
        </ToolbarButton>
      </div>

      {/* Editor */}
      <div className="p-3">
        <EditorContent editor={editor} className="w-full border-t border-gray-300 " />
      </div>
    </div>
  );
};

export default RichTextEditor;
