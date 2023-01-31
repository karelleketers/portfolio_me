import React from 'react';
import { Link } from 'react-router-dom';
import { useCTA } from "./../../hooks/UseCTA";

export const CTA = () => {

	useCTA(".ctaspantop", ".ctaspanbottom", ".rest", ".topcont", ".bottomcont");

	return (<section className="m-auto flex flex-wrap xl:justify-between xl:items-center h-full xl:max-w-textendxl">
		<section className="w-full xl:w-85 xl:mb-12">
			<section className="px-6 md:px-9 lg:px-12 xli:px-0 flex flex-wrap items-center xli:max-w-textheromd">
				<h2 className="m-auto py-6 md:py-9 xli:py-12  leading-tight text-titlesmall sm:text-7xl md:text-title547 xl:text-title1024 flex flex-col font-bold">
					<div className="topcont overflow-hidden pb-2"><p className="ctaspantop text-gold">This is not the end,</p></div>
					<div className="bottomcont overflow-hidden pb-5"><p className="ctaspanbottom text-gold">it's only the <span className="text-light">beginning.</span></p></div>
				</h2>
				<p className="rest w-full pb-6 md:pb-9 xli:pb-12 md:pt-2 xli:pt-5 font-mendlight leading-normal sm:text-xl md:text-small lg:text-2xl">Feel free to keep exploring, but if you’re already convinced then don’t hesitate to reach out to me. I’m sure I’d love to hear from you. </p>
			</section>
			<section className="rest">
				<div className="font-josefine my-6 md:my-9 lg:my-12 mx-auto flex flex-wrap justify-between px-6 w-full box-border max-w-button-cont">
					<Link to={"/projects"} className="w-12/25 xs:w-2/5 max-w-button">
						<button className="shadow-lg text-center leading-none text-base sm:text-xl w-full rounded-full border border-gold py-4 hover:border-light hover:text-gold duration-200">PROJECTS</button>
					</Link>
					<Link to={"/connect"} className="w-12/25 xs:w-2/5 max-w-button">
						<button className="shadow-lg text-center leading-none text-base sm:text-xl w-full rounded-full bg-gold hover:bg-light hover:text-gold duration-200 py-4">CONNECT</button>
					</Link>
				</div>
			</section>
		</section>
		<section className="rest w-full xl:w-1/10">
			<div className="flex flex-wrap py-16 px-6 xl:px-0 justify-between max-w-socials mx-auto xl:items-stretch">
				<a href="https://www.linkedin.com/in/karelle-keters-b576331b6/"  target="_blank" rel="noopener noreferrer" className="xl:w-full xl:my-12">
					<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" className="duration-200 text-gold fill-current hover:fill-light">
						<defs>
							<clipPath id="a">
								<path data-name="Rectangle 31" fill="none" d="M0 0h40v40H0z"/>
							</clipPath>
						</defs>
						<g className="" data-name="Group 116" clip-path="url(#a)">
							<path data-name="Path 293" d="M30.96 39.971h7.762a1.249 1.249 0 0 0 1.249-1.249c-.583-13.085 3.068-26.893-10.556-26.893a9.908 9.908 0 0 0-6.21 2.077c0-2.434-2.63-1.088-8.7-1.449a1.249 1.249 0 0 0-1.249 1.249c.5 23.59-1.122 26.265 1.249 26.265h7.761c2.254 0 .82-3.177 1.249-13.636 0-4.321 1.249-5.167 3.408-5.167 2.389 0 2.79 1.659 2.79 5.376.428 10.271-1 13.428 1.249 13.428Zm-4.039-21.3c-7.48 0-5.906 8.223-5.906 18.8h-5.263V14.953h4.954v2.161a1.325 1.325 0 0 0 2.463.584 6.929 6.929 0 0 1 6.245-3.373c5.872 0 8.058 2.885 8.058 10.657v12.491h-5.263c0-11.898 1.26-18.805-5.287-18.805Z"/>
							<path data-name="Path 294" d="M1.874 12.456c-2.37 0-.752 2.638-1.249 26.266a1.249 1.249 0 0 0 1.249 1.249h7.764c2.365 0 .746-2.64 1.249-26.266 0-2.156-3.132-.884-9.018-1.249Zm6.515 25.017H3.123V14.954h5.266Z"/>
							<path data-name="Path 295" d="M5.749 0c-7.62 0-7.575 11.539 0 11.539S13.378 0 5.749 0Zm0 9.041c-4.277 0-4.317-6.543 0-6.543s4.267 6.543 0 6.543Z"/>
						</g>
					</svg>
				</a>
				<a href="https://www.instagram.com/simply___ella/" target="_blank" rel="noopener noreferrer" className="xl:w-full xl:my-12">
					<svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" width="40.048" height="40.048" viewBox="0 0 40.048 40.048" className="duration-200 text-gold fill-current hover:fill-light">
						<g id="Layer_1" data-name="Layer 1">
							<path id="Path_290" data-name="Path 290" d="M7.926,40.048h24.2a7.936,7.936,0,0,0,7.926-7.926V7.926A7.936,7.936,0,0,0,32.122,0H7.926A7.936,7.936,0,0,0,0,7.926v24.2a7.936,7.936,0,0,0,7.926,7.926ZM2.5,7.926A5.429,5.429,0,0,1,7.926,2.5h24.2a5.429,5.429,0,0,1,5.423,5.423v24.2a5.429,5.429,0,0,1-5.423,5.423H7.926A5.429,5.429,0,0,1,2.5,32.122Z" />
							<path id="Path_291" data-name="Path 291" d="M104.149,114.378A10.229,10.229,0,1,0,93.92,104.149,10.229,10.229,0,0,0,104.149,114.378Zm0-17.955a7.726,7.726,0,1,1-7.726,7.726,7.726,7.726,0,0,1,7.726-7.726Z" transform="translate(-84.125 -84.125)" />
							<path id="Path_292" data-name="Path 292" d="M268.964,68.463a2.872,2.872,0,1,0-2.884-2.871A2.815,2.815,0,0,0,268.964,68.463Zm.3-3.147c.528.465-.676,1.03-.676.276C268.583,65.143,269.2,65.26,269.259,65.317Z" transform="translate(-238.33 -56.179)" />
						</g>
					</svg>
				</a>
				<a href="https://github.com/karelleketers"  target="_blank" rel="noopener noreferrer" className="xl:w-full xl:my-12">
					<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="40" height="39" viewBox="0 0 40 39" className="duration-200 text-gold fill-current hover:fill-light">
						<defs>
							<clipPath id="clip-path">
							<rect id="Rectangle_30" data-name="Rectangle 30" width="40" height="39" transform="translate(0 0.001)" fill="none"/>
							</clipPath>
						</defs>
						<g id="Layer_2" data-name="Layer 2" transform="translate(0.54 0.769)">
							<g id="Layer_1" data-name="Layer 1" transform="translate(-0.54 -0.769)">
								<g id="Group_115" data-name="Group 115" transform="translate(0 0)" clip-path="url(#clip-path)">
									<path id="Path_289" data-name="Path 289" d="M.843,17.438c-1.3,8.2,2.34,18.086,13.577,21.734a3.118,3.118,0,0,0,.56.053,2.135,2.135,0,0,0,2.206-2.172c-.162-.874.64-4.415-1.537-3.938-4.209.9-4.714-1.456-5.356-2.685a5.306,5.306,0,0,0,6.6,1.368c1.142-.5.545-1.775,1.087-2.244A1.253,1.253,0,0,0,17.3,27.36C13.434,26.934,9.85,25.689,9.85,19.5c0-3.623,2.515-3.948,1.821-5.463A4.89,4.89,0,0,1,11.6,10.95c2.371.438,3.462,2.139,4.6,1.833a16.849,16.849,0,0,1,8.739,0c1.176.313,2.017-1.339,4.575-1.843.731,2.764-.791,3.439.171,4.473a5.821,5.821,0,0,1,1.593,4.09c0,9.3-7.882,6.612-8.523,8.723a1.253,1.253,0,0,0,.393,1.323c1.019.857.886,3.058.777,4.827-.112,1.835-.209,3.417.805,4.31a2.315,2.315,0,0,0,2.145.418C37.954,35.544,41.624,25.7,40.34,17.52,36.835-4.817,4.366-4.789.843,17.438Zm13.814,18.34.006.844A19.754,19.754,0,0,1,12.2,35.578a7.716,7.716,0,0,0,2.458.2Zm.617-6.183-.025.134a2.606,2.606,0,0,1-3.27-1.253,11.626,11.626,0,0,0,3.3,1.127ZM20.582,3.3c19.773,0,24.23,27.182,5.8,33.321a15.047,15.047,0,0,1,.036-2.089,12.683,12.683,0,0,0-.356-4.987c8.5-1.77,9.213-11.106,5.939-15.266.405-1.591.242-5.326-1.219-5.786-.344-.1-2.181-.509-5.744,1.733a19.478,19.478,0,0,0-8.959,0C14.3,9.11,10.291,7.3,9.522,9.222A8.1,8.1,0,0,0,9.1,14.285C6.2,17.968,7.07,24.134,10,27.027c-1.66-.793-3.946-1.064-4.439.522-.538,1.734,1.528,1.524,2.809,4.686a4.409,4.409,0,0,0,.693,1.317C-2.319,24.253,3.172,3.3,20.582,3.3Z" transform="translate(-0.53 -0.688)" />
								</g>
							</g>
						</g>
					</svg>
				</a>
			</div>
		</section>
	</section>)
}