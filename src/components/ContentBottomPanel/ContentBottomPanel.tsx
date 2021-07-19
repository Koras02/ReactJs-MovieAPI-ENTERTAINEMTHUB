import axios from 'axios';
import React, {useEffect, useState}  from 'react';
import { useTvVideos } from '../../hooks/useTvVideos';
import ChevronDownIcon from '../../Icons/ChevronDownIcon';
import * as Styled from './styles/ContentBottomPanel';


interface Props {
    contentBottomPanelRef: React.RefObject<HTMLDivElement>;
    id: number;
    hasClickedContent: boolean;
    setHasClickedContent: React.Dispatch<React.SetStateAction<boolean>>;
}


export default function ContentBottomPanel({
    contentBottomPanelRef,
    id,
    hasClickedContent,
    setHasClickedContent,
}: Props) {
    const [tvDetail, setTvDetail] = useState<TvDetail.RootObject>();
    const tvVideos = useTvVideos(id);


    const getTvDetailLink = (id: number): string => {
        return `https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.REACT_APP_TMDB_AP_KEY}&language=ko`;
    };

    const getYoutubeLine = (key:string): string => `http://www.youtube.com/watch?v=${key}`;


    useEffect(() =>{
        const getTvDetail = async() =>{
            const line = getTvDetailLink(id);
            const response = await axios.get<TvDetail.RootObject>(line);
            setTvDetail(response.data);
        };


        if (hasClickedContent) {
            if(!tvDetail) getTvDetail();
        }
    }, [id,tvDetail,hasClickedContent]);


    const handleClickDetaileButton = () => setHasClickedContent(true);


    const VideoLinks = (
        <>
         {tvVideos?.results.map(
             (result) => 
             result.type === 'Trailer' &&
             result.site === 'YouTube' && 
             (
                 <Styled.PageLink
                  key={result.id}
                  href={getYoutubeLine(result.key)}
                  target="_blank"
                  aria-label={`${result.name.split('|')}[1]}`}
            >
                {result.name.split('|')[1]}
            </Styled.PageLink> 
              )
         )}
        </>
    );


    return (
        <Styled.Container className={hasClickedContent ? 'clicked' : '' } ref={contentBottomPanelRef}>
            {!hasClickedContent &&(
                <Styled.DetailButton aria-label="상세 정보 보기" onClick={handleClickDetaileButton}>
                    <ChevronDownIcon />
                </Styled.DetailButton>
            )}
            {hasClickedContent && tvDetail && (
                <>
                  <Styled.LinkContainer>
                      <Styled.PageLink href={tvDetail.homepage} target="_blank" aria-label="공식 홈페이지">
                          공식 홈페이지
                      </Styled.PageLink>
                      {VideoLinks}
                  </Styled.LinkContainer>
                <Styled.Overview>{tvDetail.overview.split('.').join('.\n').split('?').join('?\n')}</Styled.Overview>
                <Styled.Text>
                    <Styled.GrayText>장르: </Styled.GrayText>
                    {tvDetail.genres.map((genre, index) => (
                        <span key={genre.id}>
                            {index === tvDetail.genres.length - 1 ? <>{genre.name}</>  : <>{genre.name},</>}
                        </span>
                    ))}
                </Styled.Text>
                <Styled.Text>
                    <Styled.GrayText>첫 방송 날짜:</Styled.GrayText>
                    {tvDetail.first_air_date.split('_').join('.')}
                </Styled.Text>
                <Styled.Text>
                    <Styled.GrayText>시즌 수: </Styled.GrayText>
                    {tvDetail.number_of_seasons}개
                </Styled.Text>
                </>
            )}
        </Styled.Container>
    )
}