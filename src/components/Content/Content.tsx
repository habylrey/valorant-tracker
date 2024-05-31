// import classes from './Content.module.css';
import { MatchElementProps, ContentProps } from '../../types';
import { MatchElement } from '../MatchElement/MatchElement';
import { ErrorScreen } from '../ErrorScreen/ErrorScreen';

export function Content({ fatal, data }: ContentProps) {
    return (
        <>
            {data && !fatal ? (
                data.map((match, key) => {
                    const firstSegment = match.segments[0];
                    const props: MatchElementProps = {
                        error: fatal,
                        styles: firstSegment.metadata.hasWon
                            ? {
                                background: 'linear-gradient(to left, rgba(255,0,0,0), rgba(90, 176, 96, 0.873))'
                            }
                            : {
                                background: 'linear-gradient(to left, rgba(255,0,0,0), rgba(255, 0, 0, 0.692))'
                            },
                        img: match.metadata.mapImageUrl,
                        map: match.metadata.mapName,
                        result: match.metadata.result.toUpperCase(),
                        agentImg: firstSegment.metadata.agentImageUrl,
                        won: firstSegment.stats.roundsWon.value,
                        lost: firstSegment.stats.roundsLost.value,
                        kda: firstSegment.stats.kdRatio.displayValue,
                        death: firstSegment.stats.deaths.value,
                        assists: firstSegment.stats.assists.value,
                        kills: firstSegment.stats.kills.value,
                        mode: match.metadata.modeName,
                        date:  match.metadata.timestamp.slice(0,10),
                        nickname: firstSegment.metadata.platformUserHandle,
                    };

                    return <MatchElement key={match.metadata.timestamp} props={props} />;
                })
            ) : (
                <ErrorScreen />
            )}
        </>
    );
}