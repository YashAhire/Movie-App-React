import styled from "styled-components";

const Nav =  styled.div`
    height: 70px;
    width:100%;
	background: linear-gradient(170deg, #1bc059, #0d47a1);
	display: flex;
	justify-content: space-between;
	align-items: center;
    position: realtive;
   
`;

const Title = styled.div`
    font-size: 30px;
    color: #fff;
    font-weight: 600;
    font-family: 'Times New Roman', Times, serif;
    text-transform: uppercase;
    margin-left: 20px ;
    &:hover{color:yellow};

`;

const CartImg = styled.img`
    height: 48px;
    margin-right: 20px;
`;

const CartIconContainer = styled.div`
    
    position: relative;
    cursor: pointer;
`;

const CartCount = styled.div`
    background: ${props => props.color};
    border-radius: 50%;
    padding: 4px 8px;
    position: absolute;
    right: 10px;
    top: -5px;
    font-size: 12px;
    
`;

export default function Navbar(props){
    
        const {cartCount} = props;
        return(
            <>
            <Nav>
                <Title>Movie App</Title>
                <CartIconContainer>
                    <CartImg alt="Cart Icon" src="https://cdn-icons-png.flaticon.com/128/3643/3643914.png"/>
                    <CartCount color="yellow">{cartCount}</CartCount>
                </CartIconContainer>
            </Nav>
            </>
        )
    
}