import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import useDeleteBlog from "@/hooks/useDeleteBlog"

export function AlertDialogDemo({id, onDeleteSuccess}) {
    const {deleteBlogById}=useDeleteBlog();
    const deleteBlog=async ()=>{
        const result = await deleteBlogById(id)
        if (result?.success && onDeleteSuccess) {
            onDeleteSuccess()
        }
    }
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className={'text-red-500 hover:bg-red-50 hover:text-red-600 '} variant="outline">Delete</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure you want to delete this blog?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            blog from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>No</AlertDialogCancel>
          <AlertDialogAction onClick={deleteBlog} className={'text-red-500 bg-red-50 hover:bg-red-100'}>Yes</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
