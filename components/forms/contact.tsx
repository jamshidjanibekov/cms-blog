'use client'
import {useForm} from 'react-hook-form'
import {z} from "zod";
import {contactSchema} from "@/lib/validation";
import {zodResolver} from "@hookform/resolvers/zod";
import {FormControl, FormField, FormItem, FormMessage, Form} from "@/components/ui/form";
import {Textarea} from "@/components/ui/textarea";
import {Input} from "@/components/ui/input";
import {Send} from "lucide-react";
import {Button} from "@/components/ui/button";
import {toast} from "sonner";
import {useState} from "react";
const Contact = () => {
  const [isLoading, setIsLoading] = useState(false)
  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      message: '',
      email: '',
      name: '',
    },
  })

  function onSubmit(values: z.infer<typeof contactSchema>) {
    setIsLoading(true)
    const telegramBotId = process.env.NEXT_PUBLIC_TELEGRAM_BOT_API!;
    const telegramChatId = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID!;
    const promise = fetch(`https://api.telegram.org/bot${telegramBotId}/sendMessage`, {
      method: "POST",
      headers: {
        'Content-Type': "application/json",
        'cache-control': 'no-cache',
      },
      body: JSON.stringify({
        chatId: telegramChatId,
        text:`
        Name: ${values.name} 
        Email: ${values.email}:
        Message: ${values.message} 
        `
      })
    })
      .then(() => form.reset())
      .finally(() => setIsLoading(false))
    toast.promise(promise, {
      loading:'Loading...',
      success:'Successfully sent',
      error:'Error occurred',
    })
  }
  return <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
      <FormField
        control={form.control}
        name="message"
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Textarea
                disabled={isLoading}
                className='resize-none h-32'
                placeholder='Ask question or just say Hi'
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Input
                disabled={isLoading}
                placeholder='Email address'
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="name"
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Input
                disabled={isLoading}
                placeholder='Your name here'
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <Button className='w-fit' size='lg' type='submit' disabled={isLoading}>
        <span>Send</span>
        <Send className='h-4 w-4 ml-2'/>
      </Button>
    </form>
  </Form>
};

export default Contact;