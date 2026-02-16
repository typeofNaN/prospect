/**
 * ResumePreview - 简历预览容器
 * A4 尺寸（297mm）白底，打印时去除额外 padding/min-height
 */
interface ResumePreviewProps {
  children: React.ReactNode
}

export function ResumePreview({ children }: ResumePreviewProps) {
  return (
    <div className="w-full min-h-[297mm] p-0">
      <div className="w-full min-h-[297mm] bg-white print:min-h-0">{children}</div>
    </div>
  )
}
