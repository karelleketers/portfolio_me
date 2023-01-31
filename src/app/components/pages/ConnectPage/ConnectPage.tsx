import React, {useEffect, useState} from 'react';
import { TextField, TextFieldError, Button, TextArea} from './../../forms'
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import emailjs from "@emailjs/browser";
import { Header } from '../../layout';
import gsap from 'gsap';

const validationSchema = yup.object({
	name: yup.string().required().min(2),
	email: yup.string().required().email()
})
  
export const Connect = () => {

  const sendEmail = (obj: any) => {
    emailjs.send('service_uek3npc', 'template_xm95cej', obj , 'user_NZP92kPuDdDGVWF6rqvIv')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  const [messageSent, setMessageSent] = useState(false);

  useEffect(() => { //fixes it scrolling to the end
	let tl = gsap.timeline();
	tl.fromTo("body", {position: "fixed"}, {position: "relative"});
  }, [])

	return (
		<>
		<Header />
		<main className="min-h-screen bg-connect relative flex flex-wrap">
			<div className="w-full h-full absolute bg-dark opacity-60 left-0 top-0 z-0"></div>
			<section className="w-full xl:flex-1 z-10 px-6 md:px-9 lg:px-12 relative pt-nav m-auto">
				<div className="m-auto py-6 md:py-9 xli:py-12 leading-tight text-titlesmall sm:text-7xl md:text-title547 xl:text-7xl xli:text-title1024 xli:leading-none flex flex-col font-bold">
					<h2 className="text-gold">Life's too short to second-guess<span className="text-light"> yourself.</span></h2>
				</div>
				<div className="">
					<p className="w-full pt-6 md:pt-9 xli:pt-12 font-mendlight sm:text-xl leading-normal md:text-small lg:text-2xl">Let's face it: you're fully invested and you'd like to get to know me better.</p>
					<p className="w-full pb-16 pt-6 font-mendlight sm:text-xl leading-normal md:text-small lg:text-2xl">Just fill in your details and your message is guaranteed to get to me. It would be rude not to say hi, at the very least.</p>
				</div>
			</section>
			<section className="w-full xl:w-3/5 xli:w-55 relative overflow-hidden flex flex-wrap justify-center xl:justify-end items-end xl:items-center">
				{!messageSent && <Formik
					enableReinitialize
					initialValues={{
					name: "",
					company: "",
					phone: "",
					email: "",
					message: "",
					}}
					validationSchema={validationSchema}
					onSubmit={(values, { setSubmitting, resetForm}) => {
					setSubmitting(true);
					sendEmail(values)
					setMessageSent(true);
					resetForm({})
					setSubmitting(false);
					}}
				>
					{({ isSubmitting }) =>  (
					<Form className= "w-full max-w-textherosm relative px-6 md:px-9 lg:px-12 xli:px-16 bg-opacity-0 text-dark font-mendreg z-20 mt-forms-top-sm md:mt-32 lg:mt-40 xl:my-40 xl:w-formsxl">
						<div><Field placeholder="Name*" name="name" as={TextFieldError} type="input" label="Name*"/></div>
						<div><Field placeholder="Company" name="company" as={TextField} type="input" label="Company" /></div>
						<div><Field placeholder="Phone number" name="phone" as={TextField} type="input" label="Phone"/></div>
						<div><Field placeholder="Email Address*" name="email" as={TextFieldError} type="email" label="Email Address*"/></div>
						<div><Field placeholder="Message" name="message" as={TextArea} rows="1" label="Message"/></div>
						<div className="w-full flex justify-end my-9">
							<Button disabled={isSubmitting} type="submit">SEND</Button>
						</div>
					</Form>
					)}
				</Formik>}
				{
					messageSent && <div className='flex flex-wrap w-full justify-center z-20'>
						<div className='text-2xl text-dark font-mendreg'>
							<p className='p-4'>We'll talk very soon.</p>
							<p className='p-4'>Thanks for reaching out!</p>
						</div>
						<div className="w-full flex justify-center my-9">
							<Button onClick={() => {setMessageSent(false)}} type="submit">GO BACK</Button>
						</div>
					</div>
				}
				<div className="w-90 h-90 absolute opacity-90 bg-light rounded-full top-0 left-1/2 translate-x-half xl:left-0 xl:translate-x-0 xl:translate-y-half xl:top-1/2 z-10"></div>
			</section>
		</main>
		</>
	)

}	