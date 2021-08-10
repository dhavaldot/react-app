import React, { Component } from 'react';
import QRCode from 'qrcode.react';
import { Form, Button, Label } from 'semantic-ui-react';

class QRCodePage extends Component {
	constructor() {
		super();

		this.state = {
			url: '',
			tableNo: '',
			qrData: '',
		};

		this.handleChange = this.handleChange.bind(this);
		this.generateQRcode = this.generateQRcode.bind(this);
	}

	handleChange = (event) => {
		if (this.state.qrData) this.setState({ qrData: '' });
		this.setState({
			[event.target.name]: event.target.value,
		});
	};

	generateQRcode = () => {
		const QRData = this.state.url + '?table=' + this.state.tableNo;
		this.setState({ qrData: QRData });
	};

	render() {
		return (
			<div>
				<Form>
					<Form.Field>
						<Label>URL</Label>
						<Form.Input
							name="url"
							content={this.state.URL}
							onChange={this.handleChange}
							placeholder="First Name"
						/>
					</Form.Field>
					<Form.Field>
						<Label>Table No</Label>
						<Form.Input
							name="tableNo"
							content={this.state.tableNo}
							onChange={this.handleChange}
							placeholder="Table No"
						/>
					</Form.Field>
					<Button type="submit" onClick={this.generateQRcode}>
						Generate QR Code
					</Button>
					{this.state.qrData ? (
						<Form.Field>
							<div>
								<QRCode value={this.state.qrData} />
							</div>
							<Label>Table No : {this.state.tableNo}</Label>
						</Form.Field>
					) : (
						<></>
					)}
				</Form>
			</div>
		);
	}
}

export default QRCodePage;
