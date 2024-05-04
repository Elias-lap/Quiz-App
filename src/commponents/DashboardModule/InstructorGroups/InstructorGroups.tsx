import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@radix-ui/react-dialog";
import { Label } from "@radix-ui/react-label";
import { Copy } from "lucide-react";
import { Button } from "../../../components/ui/button";
import { DialogHeader, DialogFooter } from "../../../components/ui/dialog";
import { Input } from "../../../components/ui/input";
import { useState } from "react";

export default function InstructorGroups() {

  const [open, setopen] = useState(false)
  return (
    <>
      <div className="">
        <div className="container  flex p-4 justify-end buttonAdd">
          <button  className=" px-2 my-2  border-solid rounded-xl border border-black-500 mx-3">
            <i className="fa-solid fa-circle-plus mx-2"></i>Add Group
          </button>
        </div>
        <div className="  mx-8 my-4 border rounded-xl">
          <h1 className="mx-6 my-2">Groups list</h1>
          <div className=" sm:p-2 m-4 grid md:grid-cols-2 gap-2  bg-white-600  ">
            <div className="flex justify-between p-2  border-solid rounded-md border border-black-500  items-center ">
              <div>
                <h1>Group : JSB Angular</h1>
                <p>No. of students : 20</p>
              </div>
              <div className="sm:flex p-2">
                <i className="fa-solid fa-trash mr-2"></i>
                <i className="fa-solid fa-edit"></i>
              </div>
            </div>
            <div className="flex justify-between p-2 bg-yellow-50  items-center ">
              <div>
                <h1>Group : JSB Angular</h1>
                <p>No. of students : 20</p>
              </div>
              <div className="flex p-2">
                <i className="fa-solid fa-trash mr-2"></i>
                <i className="fa-solid fa-edit"></i>
              </div>
            </div>
            <div className="flex justify-between p-2 bg-yellow-50  items-center ">
              <div>
                <h1>Group : JSB Angular</h1>
                <p>No. of students : 20</p>
              </div>
              <div className="flex p-2">
                <i className="fa-solid fa-trash mr-2"></i>
                <i className="fa-solid fa-edit"></i>
              </div>
            </div>
            <div className="flex justify-between p-2 bg-yellow-50  items-center ">
              <div>
                <h1>Group : JSB Angular</h1>
                <p>No. of students : 20</p>
              </div>
              <div className="flex p-2">
                <i className="fa-solid fa-trash mr-2"></i>
                <i className="fa-solid fa-edit"></i>
              </div>
            </div>
            <div className="flex justify-between p-2 bg-yellow-50  items-center ">
              <div>
                <h1>Group : JSB Angular</h1>
                <p>No. of students : 20</p>
              </div>
              <div className="flex p-2">
                <i className="fa-solid fa-trash mr-2"></i>
                <i className="fa-solid fa-edit"></i>
              </div>
            </div>
            <div className="flex justify-between p-2 bg-yellow-50  items-center ">
              <div>
                <h1>Group : JSB Angular</h1>
                <p>No. of students : 20</p>
              </div>
              <div className="flex p-2">
                <i className="fa-solid fa-trash mr-2"></i>
                <i className="fa-solid fa-edit"></i>
              </div>
            </div>
            <div className="flex justify-between p-2 bg-yellow-50  items-center ">
              <div>
                <h1>Group : JSB Angular</h1>
                <p>No. of students : 20</p>
              </div>
              <div className="flex p-2">
                <i onClick={()=>setopen(true)} className="fa-solid fa-trash mr-2"></i>
                {/* <i className="fa-solid fa-edit"></i> */}
                        
              
              </div>
            </div>
          </div>
        </div>
      </div>

   
      {/* /////////////////////////////// */}

       <Dialog open={open}>
        {/* <DialogTrigger asChild>
          <Button variant="outline">Share</Button>
         
        </DialogTrigger> */}
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Share link</DialogTitle>
            <DialogDescription>
              Anyone who has this link will be able to view this.
            </DialogDescription>
          </DialogHeader>
          <div className="flex items-center space-x-2">
            <div className="grid flex-1 gap-2">
              <Label htmlFor="link" className="sr-only">
                Link
              </Label>
              <Input
                id="link"
                defaultValue="https://ui.shadcn.com/docs/installation"
                readOnly
              />
            </div>
            <Button type="submit" size="sm" className="px-3">
              <span className="sr-only">Copy</span>
              <Copy className="h-4 w-4" />
            </Button>
          </div>
          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              <Button onClick={()=>setopen(false)} type="button" variant="secondary">
                Close
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog> 


    </>
  );
}
