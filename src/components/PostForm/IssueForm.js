import React, { useEffect, useState } from 'react';
import { Form, Field, ErrorMessage, withFormik } from 'formik';
import * as yup from 'yup';
import styled from 'styled-components';
import { formMixin } from '../mixins';
import { withRouter } from 'react-router-dom';

//redux imports
import { connect } from 'react-redux';
import {
	addIssue,
	updateIssue,
	getUserIssues,
	getAllIssues,
} from '../../actions/index.js';

const StyledDiv = styled.div`
	${formMixin}
`;

function IssueForm(props, { values, errors, touched, isSubmitting }) {
	console.log(props);
	let existingIssue = {
		category: 'Select',
		title: 'Enter a title...',
		issueLocation: 'Enter a location...',
		details: 'Enter some details...',
		imageURL:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEtKy-Lln5mNyl_jRIaRtm7df8uN-qhNG4xIQby120IPWBjxND2A',
	};

	let submitButtonName = 'Submit Issue';
	if (props.issue) {
		console.log(
			"props.issue isn't undefined, so that means we're editing",
			props.issue
		);
		existingIssue = props.issue;
		submitButtonName = 'Update Issue';
		props.values.issueID = props.issue.id;
	}

	const [fieldValues, setFieldValues] = useState(existingIssue);

	useEffect(() => {
		if (!isDefault(fieldValues.title)) props.values.title = fieldValues.title;
		if (!isDefault(fieldValues.issueLocation))
			props.values.issueLocation = fieldValues.issueLocation;
		if (!isDefault(fieldValues.details))
			props.values.details = fieldValues.details;
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [fieldValues]);

	const updateFieldValues = (event) => {
		console.log('setting address value ', !isSubmitting);
		if (!isSubmitting)
			setFieldValues({
				...fieldValues,
				[event.target.name]: event.target.value,
			});
	};

	function isDefault(field) {
		if (
			field === existingIssue.title ||
			field === existingIssue.details ||
			field === existingIssue.issueLocation ||
			field === existingIssue.category
		) {
			return true;
		}
		return false;
	}

	function getDefaultValue(arg) {
		if (!props.issue && isDefault(arg)) {
			return undefined;
		} else {
			return arg;
		}
	}

	return (
		<StyledDiv>
			<Form>
				<div className='input-field'>
					<label>
						<span> Issue </span>
						<Field
							onChange={updateFieldValues}
							name='title'
							type='text'
							placeholder={existingIssue.title}
							value={getDefaultValue(fieldValues.title)}
						/>
					</label>
					<ErrorMessage name='title' component='div' className='errorMessage' />
				</div>
				<div>
					<label>
						<span> Category </span>
						<Field component='select' name='category'>
							<option value='select' className='firstOptionSelect'>
								Select Option
							</option>
							<option value='roads'> roads </option>
							<option value='sidewalks'> sidewalks </option>
							<option value='landscape'> landscape </option>
							<option value='debris'> debris </option>
							<option value='other'> other </option>
						</Field>
					</label>
					<ErrorMessage
						name='category'
						component='div'
						className='errorMessage'
					/>
				</div>
				<div>
					<label>
						<span> Address </span>
						<Field
							name='issueLocation'
							type='text'
							placeholder={existingIssue.issueLocation}
							onChange={updateFieldValues}
							value={getDefaultValue(fieldValues.issueLocation)}
						/>
					</label>
					<ErrorMessage
						name='issueLocation'
						component='div'
						className='errorMessage'
					/>
				</div>
				<div>
					<label>
						<span> Tell us more: </span>
						<Field
							name='details'
							type='text'
							onChange={updateFieldValues}
							placeholder={existingIssue.details}
							value={getDefaultValue(fieldValues.details)}
						/>
					</label>
					<ErrorMessage
						name='details'
						component='div'
						className='errorMessage'
					/>
				</div>

				<div className='button'>
					<button disabled={isSubmitting} type='submit'>
						{' '}
						{submitButtonName}
					</button>
				</div>
			</Form>
		</StyledDiv>
	);
}
const FormikIssueForm = withFormik({
	mapPropsToValues({ title, category, details, issueLocation, issueID }) {
		return {
			title: title || '',
			category: category || 'Select Option',
			issueLocation: issueLocation || '',
			details: details || '',
			issueID: issueID,
		};
	},
	validationSchema: yup.object().shape({
		title: yup
			.string()
			.min(3, 'title too short')
			.max(20, 'title too long')
			.required('title is required'),
		category: yup
			.string()
			.oneOf(['roads', 'sidewalks', 'landscape', 'debris', 'other']),
		issueLocation: yup
			.string()
			.min(5, 'location too short')
			.max(20, 'location too long')
			.required('location is required'),
		details: yup
			.string()
			.min(12, 'details too short')
			.max(300, 'details too long')
			.required('details is required'),
	}),

	handleSubmit(values, props) {
		props.props.getAllIssues();
		props.props.history.push('/issuesListPage');
		// window.location.reload()

		console.log('HANDLE SUBMIT WORKING', props.props);
		console.log('values: ', values);

		let issueTemplate = {
			category: 'other',
			title: 'New Issue',
			issueLocation: 'Somewhere',
			details: 'An Issue',
			imageURL:
				'https://www.inquirer.com/resizer/U8dr3O9p8uTEWVrUqU2XMagCARM=/1400x932/smart/arc-anglerfish-arc2-prod-pmn.s3.amazonaws.com/public/7QXESN6KNJGX3CSN5T32KLGTZI.jpg',
		};

		issueTemplate.category = values.category;
		issueTemplate.title = values.title;
		issueTemplate.issueLocation = values.issueLocation;
		issueTemplate.details = values.details;

		console.log('submit issue', props);
		if (props.props.issue) {
			//edit
			// console.log("updating issue");
			props.props.updateIssue(issueTemplate, values.issueID);
		} else {
			//add
			// console.log("adding issue");
			props.props.addIssue(issueTemplate);
		}
	},
})(IssueForm);

const mapStateToProps = (state) => {
	const { issues } = state;
	//console.log("MSTP:", state)
	return {
		issues,
	};
};

export default withRouter(
	connect(mapStateToProps, {
		addIssue,
		updateIssue,
		getUserIssues,
		getAllIssues,
	})(FormikIssueForm)
);
