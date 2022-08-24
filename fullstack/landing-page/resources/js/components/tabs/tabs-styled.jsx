import styled from "styled-components";

export const Tabs = styled.div`
    width: var(--section-width);
`;

export const TabList = styled.ol`
    padding-left: 0;
`;

export const TabContent = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;
    justify-content: center;
    align-items: center;

    @media(min-width: 1280px) {
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }

    @media(max-width: 767px) {
        grid-template-columns: 1fr 1fr;
    }
`;