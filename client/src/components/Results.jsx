import homepageData from "../data/homepageData"
function Results(){
	const results = homepageData.results
	return(
		<section>
			<h2>Our Top Results</h2>
			<div className="resultGrid">{results.map((r,index)=>(
				<div className="resultCard" key={index}>
					<h3>{r.name}</h3>
					<p>{r.marks}</p>
					<p>{r.exam}</p>
				</div>
			))}
			</div>
		</section>
	)
}
export default Results