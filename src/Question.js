import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ title, info }) => {
	const [activeQuestion, setActiveQuestion] = useState(false);

	return (
		<article className="question">
			<header>
				<h4>{title}</h4>
				<button
					className="btn"
					onClick={() => setActiveQuestion(!activeQuestion)}
				>
					{activeQuestion ? <AiOutlineMinus /> : <AiOutlinePlus />}
				</button>
			</header>
			<p>{activeQuestion ? info : ""}</p>
		</article>
	);
};

export default Question;
