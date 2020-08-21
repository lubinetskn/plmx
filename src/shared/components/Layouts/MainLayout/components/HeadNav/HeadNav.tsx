import React, {FunctionComponent} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {makeStyles, Theme, createStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {ReactComponent as ExitIcon} from '../../../../../../assets/icons/Exit.svg';
import {ReactComponent as AvatarIcon} from '../../../../../../assets/icons/avatar-icon.svg';

import {Container, Title, RightNav} from './styled';
import {getUserInfo} from '../../../../../../app/redux/stores/user/getters';
import {userExitAction} from '../../../../../../app/redux/stores/user/userSlice';

interface OwnProps {}

type Props = OwnProps;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      borderRadius: 10,
      backgroundColor: '#c5c5c5',
      boxShadow: 'none',
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      width: 489,
      height: 40,
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: 3,
      fill: '#8b8b8b',
    },
    divider: {
      height: 28,
      margin: 4,
    },
  })
);

const HeadNav: FunctionComponent<Props> = () => {
  const dispatch = useDispatch();
  // const [searchValue, setSearchValue] = useState('');
  const classes = useStyles();
  const user = useSelector(getUserInfo);

  const handleLogout = () => {
    dispatch(userExitAction());
  };
  return (
    <Container>
      <Title>
        {/* <Paper component="form" className={classes.root}>
          <IconButton type="submit" className={classes.iconButton} aria-label="search">
            <SearchIcon />
          </IconButton>
          <InputBase className={classes.input} placeholder="Поиск" inputProps={{'aria-label': 'search google maps'}} />
        </Paper> */}
      </Title>
      <RightNav>
        <AvatarIcon width="32" height="32" />
        <div>
          {user.first_name} {user.last_name}
        </div>
        <Button onClick={() => handleLogout()}>
          <ExitIcon />
        </Button>
      </RightNav>
    </Container>
  );
};

export default HeadNav;
