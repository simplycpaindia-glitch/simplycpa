"use client";

import { useState } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import { StarterKit } from "@tiptap/starter-kit";
import { Underline } from "@tiptap/extension-underline";
import { Link } from "@tiptap/extension-link";
import { Placeholder } from "@tiptap/extension-placeholder";
import { Table, TableRow, TableCell, TableHeader } from "@tiptap/extension-table";
import {
  Bold, Italic, Underline as UnderlineIcon, List, ListOrdered, Heading2, Heading3,
  Table as TableIcon, LinkIcon, Quote, Undo, Redo,
} from "lucide-react";
import { cn } from "@/lib/utils";

const CALLOUT_VARIANTS = [
  { key: "tip", label: "Tip" },
  { key: "warning", label: "Warning" },
  { key: "example", label: "Example" },
  { key: "important", label: "Important" },
] as const;

export function RichTextEditor({
  name,
  defaultValue,
  placeholder,
}: {
  name: string;
  defaultValue?: string;
  placeholder?: string;
}) {
  const [html, setHtml] = useState(defaultValue ?? "");

  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit,
      Underline,
      Link.configure({ openOnClick: false }),
      Placeholder.configure({ placeholder: placeholder ?? "Start writing…" }),
      Table.configure({ resizable: false }),
      TableRow,
      TableHeader,
      TableCell,
    ],
    content: defaultValue ?? "",
    onUpdate: ({ editor }) => setHtml(editor.getHTML()),
    editorProps: {
      attributes: {
        class: "prose-cpa min-h-[320px] max-w-none focus:outline-none",
      },
    },
  });

  function insertCallout(variant: (typeof CALLOUT_VARIANTS)[number]["key"]) {
    if (!editor) return;
    editor
      .chain()
      .focus()
      .insertContent(
        `<div class="callout callout-${variant}"><p><strong>${variant.toUpperCase()}:</strong> </p></div><p></p>`
      )
      .run();
  }

  if (!editor) return null;

  return (
    <div className="rounded-lg border border-ink-950/15">
      <div className="flex flex-wrap items-center gap-1 border-b border-ink-950/10 p-2">
        <ToolbarButton onClick={() => editor.chain().focus().toggleBold().run()} active={editor.isActive("bold")}>
          <Bold className="size-4" />
        </ToolbarButton>
        <ToolbarButton onClick={() => editor.chain().focus().toggleItalic().run()} active={editor.isActive("italic")}>
          <Italic className="size-4" />
        </ToolbarButton>
        <ToolbarButton onClick={() => editor.chain().focus().toggleUnderline().run()} active={editor.isActive("underline")}>
          <UnderlineIcon className="size-4" />
        </ToolbarButton>
        <Divider />
        <ToolbarButton onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} active={editor.isActive("heading", { level: 2 })}>
          <Heading2 className="size-4" />
        </ToolbarButton>
        <ToolbarButton onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()} active={editor.isActive("heading", { level: 3 })}>
          <Heading3 className="size-4" />
        </ToolbarButton>
        <Divider />
        <ToolbarButton onClick={() => editor.chain().focus().toggleBulletList().run()} active={editor.isActive("bulletList")}>
          <List className="size-4" />
        </ToolbarButton>
        <ToolbarButton onClick={() => editor.chain().focus().toggleOrderedList().run()} active={editor.isActive("orderedList")}>
          <ListOrdered className="size-4" />
        </ToolbarButton>
        <ToolbarButton onClick={() => editor.chain().focus().toggleBlockquote().run()} active={editor.isActive("blockquote")}>
          <Quote className="size-4" />
        </ToolbarButton>
        <Divider />
        <ToolbarButton
          onClick={() =>
            editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run()
          }
        >
          <TableIcon className="size-4" />
        </ToolbarButton>
        <ToolbarButton
          onClick={() => {
            const url = window.prompt("Link URL");
            if (url) editor.chain().focus().setLink({ href: url }).run();
          }}
          active={editor.isActive("link")}
        >
          <LinkIcon className="size-4" />
        </ToolbarButton>
        <Divider />
        {CALLOUT_VARIANTS.map((v) => (
          <button
            key={v.key}
            type="button"
            onClick={() => insertCallout(v.key)}
            className="rounded px-2 py-1 text-xs font-medium text-ink-400 hover:bg-ink-950/5"
          >
            + {v.label}
          </button>
        ))}
        <div className="ml-auto flex gap-1">
          <ToolbarButton onClick={() => editor.chain().focus().undo().run()}>
            <Undo className="size-4" />
          </ToolbarButton>
          <ToolbarButton onClick={() => editor.chain().focus().redo().run()}>
            <Redo className="size-4" />
          </ToolbarButton>
        </div>
      </div>
      <div className="p-4">
        <EditorContent editor={editor} />
      </div>
      <input type="hidden" name={name} value={html} />
    </div>
  );
}

function ToolbarButton({
  onClick,
  active,
  children,
}: {
  onClick: () => void;
  active?: boolean;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded p-1.5 text-ink-600 hover:bg-ink-950/5",
        active && "bg-ink-950/10 text-ink-950"
      )}
    >
      {children}
    </button>
  );
}

function Divider() {
  return <div className="mx-1 h-5 w-px bg-ink-950/10" />;
}
