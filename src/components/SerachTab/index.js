import React, { useCallback, useEffect, useRef, useState} from 'react';
import { FaSearch } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { SEARCH_REQUEST } from '../../redux/type';
import { SearchTabBlock, SearchInput, ClearText } from './styles';


const SearchTab = ({ history }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [prevRouter, setPrevRouter] = useState('/');
    const inputRef = useRef(null);
    const dispatch = useDispatch();

    useEffect(() => {
        if (
            isOpen &&
            inputRef.current.value.length > 0 &&
            history.location.pathname.indexOf('search') === -1
        )  {
            inputRef.current.value = '';
            setIsOpen(false);
        }
    }, [isOpen, history.location.pathname]);

    
    // 검색창 열기 & 토글식
    const ToggleSearchTab = useCallback(() => {
        if(!isOpen)
        {
            setPrevRouter(history.location.pathname);
            inputRef.current.focus();
        } else {
            inputRef.current.value = '';
        } 
        setIsOpen((prev) => !prev);
    }, [isOpen, history.location.pathname]);


    // 포커스 나감
    const onFocusOut = (e) => {
        if(e.target.value === '') {
            setIsOpen((prev) => !prev);
            history.push(prevRouter);
        }
    };

    // 검색어 지우기
    const onClearText = () => {
        inputRef.current.value = '';
        history.push(prevRouter);
    };

    const onChangeUrl  = useCallback(async () => {
        if (inputRef.current.value.length === 0) {
            history.replce(`/search?q=${inputRef.current.value}`);
            dispatch({
                type: SEARCH_REQUEST,
                data: inputRef.current.value,
            });
        } else {
            history.push(prevRouter);
        }
    }, [dispatch, history, prevRouter]);


    return (
        <SearchTabBlock isOpen={isOpen}>
            <FaSearch size={20} onClick={ToggleSearchTab} style={{cursor: 'pointer'}} />
            <SearchInput
               ref={inputRef}
               isOpen={isOpen}
               placeholder="제목이나 배우를 입력하세요"
               onBlur={onFocusOut}
               onChange={onChangeUrl}
            />
            <ClearText isOpen={isOpen} onClick={onClearText} />

        </SearchTabBlock>
    );
};

export default withRouter(SearchTab);