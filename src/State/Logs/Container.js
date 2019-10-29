import {connect} from "react-redux";
import Logs from "../../Components/Logs/Logs";
import LogsResources from "../../Api/LogsResources";

const mapStateToProps = state => ({
    logs: state.logsReduce.logs
});

const mapDispatchToProps = dispatch => ({
    refreshContent: (contentList) =>{
        dispatch({
            type: "REFRESH",
            payload: contentList
        })
    },
    getLogs: (logs) =>{
        LogsResources.getLogs(logs).then(res => res.json())
            .then(res =>
            {
                dispatch({
                    type: 'GET_LOGS',
                    payload: res
                })
            })

    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Logs)