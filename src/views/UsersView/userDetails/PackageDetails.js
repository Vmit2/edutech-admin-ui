import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import LabelValue from '../../shared/LabelValue';
import useStyles from './UserDetailsView.style';
import { formatePageaDeatail, getformatedDate } from './utilitizes/utils';

const details = {
    "id_package_purchase": 2,
    "board_id": 1,
    "standard_id": 1,
    "standard_package_ids": null,
    "user_id": 26,
    "total_price": "3675",
    "transaction_id": "bdbc499468869e183e7e94af92fb56d4",
    "purchase_date": "2021-05-28T10:30:00.000Z",
    "expiry_date": "2022-05-27T23:10:00.000Z",
    "status": 1,
    "created_date": "2021-05-28T11:21:33.000Z",
    "updated_date": "2021-05-28T11:21:33.000Z",
    "studentDetails": {},
    "subjectDetails": {
        "id_standards": 1,
        "subject_package_id": "P0000000001",
        "standard_name": "Std 1",
        "subject_list": "Cursive Writing - 1,\nPixie Dust - 1,\nArt of Drawing and Colouring - 1,\nComputer - 1,\nGeneral Knowledge -2,\nGrammar - 1",
        "price": "3675",
        "board_id": 1,
        "created_date": "2021-05-08T07:50:57.000Z",
        "updated_date": "2021-05-08T07:50:57.000Z"
    }
}

function PackageDetails(props) {
    const classes = useStyles();
    const detail = formatePageaDeatail(details);
    return (
        <Grid container className={classes.packageDetailsWrapper}>
            <Grid item container>
                <Typography variant="h4" className={classes.moreDetailsTitle}>
                    Packages Details:
                </Typography>
                <Grid container>
                    <Grid item xs={12} sm={6} md={6}>
                        <LabelValue
                            label="Package Purchase ID :"
                            value={detail.idPackagePurchase}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <LabelValue
                            label="BoardId:"
                            value={detail.boardId}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <LabelValue
                            label="Standard Id:"
                            value={detail.standardId}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <LabelValue label="User Id: " value={detail.userId} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <LabelValue label="Total Price: " value={detail.totalPrice} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <LabelValue label="Transaction Id: " value={detail.transactionId} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <LabelValue label="Purchase Date " value={getformatedDate(detail.purchaseDate)} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <LabelValue label="Expiry Date: " value={getformatedDate(detail.expiryDate)} />
                    </Grid>
                </Grid>
            </Grid>
            { detail.subjectDetails && <Grid item container>
                <Typography variant="h4" className={classes.moreDetailsTitle}>
                    Subject Details:
                </Typography>
                <Grid container>
                    <Grid item xs={12} sm={6} md={6}>
                        <LabelValue
                            label="Subject Package Id:"
                            value={detail.subjectDetails.subjectPackageId}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <LabelValue
                            label="Standard Name:"
                            value={detail.subjectDetails.standardName}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>
                        <LabelValue
                            label="Subject List:"
                        />
                        <ul>
                            {detail.subjectDetails.subjectList.map(value=>{
                                return <li>{value}</li>
                            })}
                        </ul>
                    </Grid>
                </Grid>
            </Grid>}
        </Grid>
    );
}

export default PackageDetails;