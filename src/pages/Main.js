import TopBarcss from '../components/TopBar';
import TopBarTitle from '../components/TopBarTitle';
import TopBarLine from '../components/TopBarLine';
import Group1 from '../utils/Group1';
import GroupTextFont from '../components/GroupTextFont';
import GroupTextPosition from '../components/GroupTextPosition';
import ThemeBox from '../components/Theme';
import ThemeBg1 from '../utils/ThemeBg1';


const Main = () => {
    return(
        <div>
            <TopBarcss><TopBarTitle>코멘토 쇼핑</TopBarTitle></TopBarcss>
            <TopBarLine />
            <Group1>
                <ThemeBg1>
                <ThemeBox>
                <GroupTextPosition>
                    <GroupTextFont>#겨울 방한템</GroupTextFont>
                </GroupTextPosition>
                </ThemeBox>
                </ThemeBg1>
            </Group1>
            
        </div>
    )
};

export default Main;

