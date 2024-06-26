import styled from "styled-components";
import Rating from "../../assets/image/rating-50.png";

const Tasks3 = () => {
	return (
		<div>
			<div className="container">
				<Content>
					<div>
						<Card1>
							<ContentImg>
								<img
									src="https://cdn.mos.cms.futurecdn.net/Pyma6LSPSGupqqWVwLYuJg.jpg"
									alt=""
								/>
							</ContentImg>
							<Box>
								<h3>
									Iphone 15 Pro Max Ultra 556gb <br /> черный
								</h3>
								<RatingContent>
									<p>Рейтинг</p>
									<img src={Rating} alt="" />
									<span>(138)</span>
								</RatingContent>
								<GreenText>В наличии(55)</GreenText>
								<ClassP>Код товара: 393478</ClassP>
							</Box>
							<ContentDiv>
								<ButtonContent>
									<CardButton>
										<button>+</button>
										<p>1</p>
										<button>-</button>
										<p>104900 c</p>
									</CardButton>
								</ButtonContent>
								<IkonkaButton>
									<button>
										<img
											src="https://bumper-stickers.ru/40481-thickbox_default/simvol-serdca.jpg"
											alt=""
										/>
										В избранное
									</button>
									<button>
										<img
											src="https://static.tildacdn.com/tild3265-6438-4330-a330-376266656136/photo_52157121719404.jpg"
											alt=""
										/>
										Удалить
									</button>
								</IkonkaButton>
							</ContentDiv>
						</Card1>
						{/* !!! */}
						<Card1>
							<ContentImg2>
								<img
									src="https://welectronics.com/images/stories/virtuemart/product/nrvCnsxQebrNdCFFi475Cf7.jpg"
									alt=""
								/>
							</ContentImg2>
							<Box>
								<h3>
									Samsung Galaxy s22 Ultra 556gb <br /> черный
								</h3>
								<RatingContent>
									<p>Рейтинг</p>
									<img src={Rating} alt="" />
									<span>(138)</span>
								</RatingContent>
								<GreenText>В наличии(55)</GreenText>
								<p>Код товара: 393478</p>
							</Box>
							<ContentDiv>
								<ButtonContent>
									<CardButton>
										<button>+</button>
										<p>1</p>
										<button>-</button>
										<p>104900 c</p>
									</CardButton>
								</ButtonContent>
								<IkonkaButton>
									<button>
										<img
											src="https://bumper-stickers.ru/40481-thickbox_default/simvol-serdca.jpg"
											alt=""
										/>
										В избранное
									</button>
									<button>
										<img
											src="https://static.tildacdn.com/tild3265-6438-4330-a330-376266656136/photo_52157121719404.jpg"
											alt=""
										/>
										Удалить
									</button>
								</IkonkaButton>
							</ContentDiv>
						</Card1>
						{/* <div>
								<img
									src="https://welectronics.com/images/stories/virtuemart/product/nrvCnsxQebrNdCFFi475Cf7.jpg"
									alt=""
								/>
							</div> */}
					</div>
				</Content>
			</div>
		</div>
	);
};

export default Tasks3;

const Content = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

const Card1 = styled.div`
	display: flex;
	/* justify-content: center; */
	align-items: center;
	margin-top: 20px;
	/* width: 400px; */
	height: 221px;
	gap: 40px;
	background-color: white;
	color: black;
`;

const ContentImg = styled.div`
	img {
		width: 400px;
		height: 100%;
	}
`;

const Box = styled.div`
	display: flex;
	flex-direction: column;
	gap: 12px;
	h3 {
		color: #131357;
	}
`;

const ClassP = styled.p`
	color: #131357;
`;
const GreenText = styled.p`
	color: green;
	font-size: 20px;
`;

const ButtonContent = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 55px;
`;

const CardButton = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 18px;
	button {
		background: none;
		font-size: 20px;
		color: black;
		border-radius: 20px;
		border: 1.185px solid;
		cursor: pointer;
		width: 1.875rem;
		height: 1.875rem;
	}
`;

const IkonkaButton = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	/* padding-top: 85px; */
	/* padding-right: 60px; */
	/* margin-top: 150px; */
	margin-left: 200px;
	margin-top: 70px;
	button {
		display: flex;
		align-items: center;
		width: 130px;
		background: none;
		color: black;
		border: none;
		cursor: pointer;
	}
	img {
		/* margin-top: 10px; */
		width: 20px;
		height: 20px;
	}
`;

const ContentDiv = styled.div`
	display: flex;
	flex-direction: column;
`;

const ContentImg2 = styled.div`
	img {
		width: 380px;
		height: 100%;
	}
`;

const RatingContent = styled.div`
	display: flex;
	img {
		width: 90px;
		margin-left: 12px;
	}
	span {
		margin-left: 5px;
		color: #131357;
	}
	p {
		color: #131357;
	}
`;
