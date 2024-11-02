export function MainContainer() {
	return (
		<div id="main" className="flex justify-center bg-verdant-bg">
			<div className="flex flex-col items-center justify-center lg:flex-row">
				<div className="mx-12 mb-8 mt-8 lg:mb-0 lg:mt-0">
					<img
						src="https://github.com/m-ghozi.png"
						alt="PFP"
						className="h-60 w-60 rounded-full bg-verdant-bg-light p-4"
					/>
				</div>
				<div className="mx-12 mb-8 items-center justify-center lg:mx-8 lg:mb-0">
					<div className="text-3xl font-bold text-verdant-fg">
						Hey! I'm <span className="text-verdant-blue">M. Ghozi Syah Putra</span>!
					</div>
					<div className="text-base text-verdant-fg-dark">
						I am a Indonesian college student and self-taught full-stack developer.
						<br />
						<br />
						I've been programming since 2021, and I enjoy creating Web Applications and IoT Device.
						<br />
						<br />I am proficient in a variety of programming languages, such as{" "}
						<span className="text-verdant-blue">TypeScript</span>,{" "}
						<span className="text-verdant-yellow">Python</span>, and{" "}
						<span className="text-verdant-red">C++</span>.
						<br />I am also familiar with a range of web development frameworks and tools such as{" "}
						<span className="text-verdant-orange">React</span>,
						<br />
						<span className="text-verdant-blue">NestJS</span>, and{" "}
						<span className="text-verdant-purple">Vite</span> and database management systems such as{" "}
						<span className="text-verdant-green">MongoDB</span> and{" "}
						<span className="text-verdant-purple">Firebase</span>.
						<br />
						Additionally, I am familiar with <span className="text-verdant-red">Linux</span> and IoT
						devices, including <span className="text-verdant-yellow">ESP32</span>,{" "}
						<span className="text-verdant-blue">Arduino</span>, and{" "}
						<span className="text-verdant-green">Raspberry Pi</span>.
					</div>
				</div>
			</div>
		</div>
	);
}

export default MainContainer;
