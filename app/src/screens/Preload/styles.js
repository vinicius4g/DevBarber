import React from 'react';
import styled from 'styled-components/native';

//flex 1 para pega todo o espaco da tela

export const Container = styled.SafeAreaView`
    background-color: #63c2d1;
    flex: 1; 
    justify-content: center;
    align-items: center;
`;

export const LoadingIcon = styled.ActivityIndicator`
    margin-top: 50px;
`;