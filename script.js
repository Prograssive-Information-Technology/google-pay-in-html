const button = document.querySelector("google-pay-button");

button.paymentRequest = {
	apiVersion: 2,
	apiVersionMinor: 0,
	allowedPaymentMethods: [
		{
			type: "CARD",
			parameters: {
				allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
				allowedCardNetworks: ["MASTERCARD", "VISA"],
			},
			tokenizationSpecification: {
				type: "PAYMENT_GATEWAY",
				parameters: {
					gateway: "PiTech",
					gatewayMerchantId: "9607-8832-3078",
				},
			},
		},
	],
	merchantInfo: {
		merchantId: "BCR2DN4T67NOFIDX",
		merchantName: "PiTech",
	},
	transactionInfo: {
		totalPriceStatus: "FINAL",
		totalPriceLabel: "Total",
		totalPrice: "1.00",
		currencyCode: "USD",
		countryCode: "US",
	},
};

button.addEventListener("loadpaymentdata", (event) => {
	console.log("load payment data", event.detail);
});

