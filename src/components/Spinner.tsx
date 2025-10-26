import { Spinner } from "@/components/ui/spinner"
export function SpinnerColor() {
  return (
    <div className="flex justify-center items-center gap-6">
      <Spinner className="size-30  text-blue-500" />
    </div>
  )
}