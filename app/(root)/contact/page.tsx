import {Dot, Home, Mail, Phone, Send} from "lucide-react";
import Link from "next/link";
import {Textarea} from "@/components/ui/textarea";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";

const ContactPage = () => {
  return (
    <div className='max-w-6xl mx-auto'>
      <div className='relative min-h-[40vh] flex items-center justify-end flex-col'>
        <h2 className='text-center text-4xl font-creteRound mt-2'>
          <span>Contact</span>
        </h2>

        <div className='flex gap-1 items-center mt-4'>
          <Home className='w-4 h-4'/>
          <Link
            href='/'
            className='opacity-90 hover:underline hover:opacity-100'
          >
            Home
          </Link>
          <Dot/>
          <p className='text-muted-foreground'>Contact</p>
        </div>
      </div>

      <div className='grid grid-cols-2 max-md:grid-cols-1 gap-4 mt-6'>
        <div className='flex flex-col'>
          <h1>Contact Jamshid</h1>
          <p className='mt-2 text-muted-foreground'>
            I am here to help an answer any question you might have. I look
            forward to hearing from you
          </p>

          <div className='mt-12 flex items-center gap-3'>
            <Mail className='w-4 h-4'/>
            <p>jamshidjanibekov@gmail.com</p>
          </div>
          <div className='flex items-center gap-3 mt-2'>
            <Phone className='w-4 h-4'/>
            <p className='text-sm'>+99893 110 00 40</p>
          </div>
        </div>
        <div className='flex flex-col gap-2'>
          <h2 className='text-4xl font-creteRound'>Contact form</h2>
          <Textarea
            className='resize-none h-32'
            placeholder='Ask question or just say Hi'
          />
          <Input
            placeholder='Email address'
          />
          <Input
            placeholder='Your name here'
          />
          <Button className='w-fit' size='lg'>
            <span>Send</span>
            <Send className='h-4 w-4 ml-2'/>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;