import { DialogHeader, Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/Components/ui/dialog"
import { AlertTriangle } from "lucide-react"

function LogoutModal({ openModal, setIsDialogOpen }) {
    return (
        <Dialog open={openModal} onOpenChange={setIsDialogOpen}>
            <DialogTrigger />
            <DialogContent className="w-[40%] bg-[#171A21] mx-auto flex flex-col items-center">
                <DialogHeader>
                    <DialogTitle className="mx-auto text-2xl border-b-1 pb-9 w-full text-white text-center">Confirm Logout</DialogTitle>
                    <DialogDescription>
                        <AlertTriangle color="#8F8065" className="mx-auto h-10 w-10 bg-[#8F806552]/80 my-2.5 rounded-full p-2 "/>
                        <p className="text-center text-sm my-4">Are you sure you want to log out of your account? You will need to sign in again to access your account.</p>
                        <div className="flex justify-center items-center my-2 gap-0.5">
                            <button className="border-1 hover:bg-[#ccc]/10 text-white cursor-pointer w-30 mx-0.5  border-[#8F8065] rounded-sm px-6 py-2">Cancel</button>
                            <button className="border-1 bg-[#8F8065] hover:bg-[#8F8065]/80 text-white w-30 mx-0.5  cursor-pointer rounded-sm px-6 py-2">Yes, Logout</button>
                        </div>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}
export default LogoutModal