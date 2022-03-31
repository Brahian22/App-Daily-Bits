import React from 'react'
import { Link } from 'react-router-dom'
import { BtnCircle, StyledText1, ContainerAll, LabelText, ContainerComp, ContainerQuest } from '../styles/StyledCategorias'



const CategoriaComponent = () => {
  return (
    <div>
        <div>
                <ContainerAll>
                    <ContainerComp>
                        <StyledText1>Practica tus conocimientos en la categoría que prefieras.</StyledText1>
                        <ContainerQuest>
                            <div>
                                <BtnCircle>
                                    <Link to="/question/html" ><img src="https://res.cloudinary.com/df90q7vvj/image/upload/v1644708212/DailyBitsSprint2/Ellipse_9_2_erhriq.png" alt='html' />
                                    </Link>
                                </BtnCircle>
                                <div>
                                    <LabelText>HTML</LabelText>
                                </div>
                            </div>


                            <div style={{ marginLeft: "3%" }}>
                                <BtnCircle >
                                    <Link to="/question/css" >
                                        <img src="https://res.cloudinary.com/df90q7vvj/image/upload/v1644709703/DailyBitsSprint2/Ellipse_9_3_cgldjt.png" alt="css" />
                                    </Link>
                                </BtnCircle>
                                <div>
                                    <LabelText>CSS</LabelText>
                                </div>
                            </div>

                            <div>
                                <BtnCircle>
                                    <Link to="/question/js" >
                                        <img src="https://res.cloudinary.com/df90q7vvj/image/upload/v1644709697/DailyBitsSprint2/Ellipse_9_4_lzuoib.png" alt="js" />
                                    </Link>
                                </BtnCircle>
                                <div>
                                    <LabelText>JAVASCRIPT</LabelText>
                                </div>
                            </div>

                            <div style={{ marginLeft: "3%" }}>
                                <BtnCircle>
                                    <Link to="/question/figma" >

                                        <img src="https://res.cloudinary.com/df90q7vvj/image/upload/v1644709690/DailyBitsSprint2/Ellipse_9_5_aahohj.png" alt="figma" />
                                    </Link>

                                </BtnCircle>
                                <div>
                                    <LabelText>FIGMA</LabelText>
                                </div>
                            </div>

                            <div>
                                <BtnCircle>
                                    <Link to="/question/ux" >

                                        <img src="https://res.cloudinary.com/df90q7vvj/image/upload/v1644709679/DailyBitsSprint2/Ellipse_9_6_fkcw5g.png" alt="ux" />
                                    </Link>
                                </BtnCircle>
                                <div>
                                    <LabelText>UX</LabelText>
                                </div>
                            </div>

                        </ContainerQuest>
                    </ContainerComp>
                </ContainerAll>
            </div>

    </div>
  )
}

export default CategoriaComponent