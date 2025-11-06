import { useState } from 'react'


const initailBoard = () => Array(9).fill(null)

const useTicTacToe = () => {
    const [board, setBoard] = useState(initailBoard)
    const [isXNext, setIsXNext] = useState(true)

    const WINNING_COMBINATIONS = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    const calculateWinner = (currentBoard) => {
        for (let combination of WINNING_COMBINATIONS) {
            const [a, b, c] = combination;
            if (currentBoard[a] && currentBoard[a] === currentBoard[b] && currentBoard[a] === currentBoard[c]) {
                return currentBoard[a];
            }
        }
        return null;
     }

    const handleClick = (index) => { 
        //check winner

        const winner = calculateWinner(board);
        console.log(winner);
        if(winner || board[index]) {
            return;
        }
        const newBoard= [...board];
        newBoard[index]= isXNext ? 'X' : 'O';
        setBoard(newBoard);
        setIsXNext(!isXNext);

    }

    const resetGame = () => {
        setBoard(initailBoard());
        setIsXNext(true);
     }

    const getStatusMessage = () => {
        const winner = calculateWinner(board);
        if (winner) {
            return `Player ${winner} wins!`;
        } else if (!board.includes(null)) {
            return "It's a draw!";
        } else {
            return `Player ${isXNext ? 'X' : 'O'}'s turn`;
        }
     }

    return { board, handleClick, calculateWinner, getStatusMessage, resetGame}
}

export default useTicTacToe