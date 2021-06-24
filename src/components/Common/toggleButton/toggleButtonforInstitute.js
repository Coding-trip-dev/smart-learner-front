import React from "react";
import "./_toggleBtn.scss";
import { withStyles } from "@material-ui/core/styles";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import { updateAccStatus } from '../../redux/actions/instituteActions';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";



const IOSSwitch = withStyles(theme => ({
    root: {
        width: 31,
        height: 15,
        padding: 0,
        margin: theme.spacing(1)
    },
    switchBase: {
        padding: 1,
        "&$checked": {
            transform: "translateX(16px)",
            color: theme.palette.common.white,
            "& + $track": {
                backgroundColor: "#3F927A",
                opacity: 1,
                border: "none"
            }
        },
        "&$focusVisible $thumb": {
            color: "#3F927A",
            border: "6px solid #fff"
        }
    },
    thumb: {
        width: 13,
        height: 13
    },
    track: {
        borderRadius: 26 / 2,
        border: `1px solid ${theme.palette.grey[400]}`,
        backgroundColor: "#ACACAC",
        opacity: 1,
        transition: theme.transitions.create(["background-color", "border"])
    },
    checked: {},
    focusVisible: {}
}))(({ classes, ...props }) => {
    return (
        <Switch
            focusVisibleClassName={classes.focusVisible}
            disableRipple
            classes={{
                root: classes.root,
                switchBase: classes.switchBase,
                thumb: classes.thumb,
                track: classes.track,
                checked: classes.checked
            }}
            {...props}
        />
    );
});


function ToggleButton(props) {
    const [state, setState] = React.useState({
        enabled: props.status === 3 ? true : false,
    });

    const handleChange = name => event => {
        setState({ ...state, [name]: event.target.checked });
    };

    const onClickHandler = e => {
        setTimeout(() => {
            props.updateAccStatus({
                user_id: props.id,
                status: props.status === 3 ? 4 : 3
            })
        })
        // console.log(props.status, state.enabled);

    }

    return (
        <FormGroup>
            <FormControlLabel
                labelPlacement="start"
                classes={{ label: "switch-label", root: "switch-root" }}
                control={
                    <IOSSwitch
                        checked={state.enabled}
                        onChange={handleChange("enabled")}
                        onClick={onClickHandler}
                        value="enabled"
                    />
                }
                label={state.enabled ? "Enable" : "Disable"}
            />
        </FormGroup>
    );
}



// let mapStateToProps = store => {
//     return {
//         auth: store.auth

//     }
// }

export default withRouter(connect(null, { updateAccStatus })(ToggleButton));
