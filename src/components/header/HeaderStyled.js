import styled from 'styled-components';

const HeaderStyled = styled.header`
    display: flex;
    margin-top: 0.5rem;
    padding-left: 10px;
    .nav-logo {
        margin-right: auto;
        font-family: star_jedi_outline;
    }

    .nav-list {
        list-style: none;
        display: flex;
        padding: 0.5rem 1rem;
        border-radius: 3px;
    }

    .nav-item {
        margin-right: 40px;
    }
    .nav-links {
        transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

        &:hover {
            color: #ccc;
        }
    }
    .toggle-planet {
        background-color: yellow;
        border-radius: 5px;
        width: 100px;
        height: 40px;
        border: none;
        transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

        &:hover {
            color: white;
            background-color: blue;
        }
    }

    /* a:hover {
        background-color: #444;
    } */
`;
export default HeaderStyled;
