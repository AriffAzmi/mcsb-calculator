class Calculator {

	constructor() {

		this.current_ratio = 0;
		this.quick_ratio = 0;
		this.leverage_ratio = 0;
		this.debt_to_assets_ratio = 0;
		this.gross_profit_margin = 0;
		this.net_profit_margin = 0;
		this.days_stock = 0;
		this.days_trade_debtors = 0;
		this.days_trade_creditor = 0;
		this.return_on_assets = 0;
		this.return_on_equity = 0;
	}

	getCurrentRatio() {

		return this.current_ratio;
	}

	setCurrentRatio() {

		var current_assets = $('#current_assets');
		var current_liabilities = $('#current_liabilities');

		var cr = (
			current_assets.val() / current_liabilities.val()
		);
		
		this.current_ratio = (
			current_assets.val() / current_liabilities.val()
		);

		return this;
	}

	getQuickRatio() {

		return this.quick_ratio;
	}

	setQuickRatio() {
		
		var total_current_assets = $('#current_assets');
		var total_current_stock = $('#stock_or_inventory');
		var current_liabilities = $('#current_liabilities');

		this.quick_ratio = (
			(
				total_current_assets.val() - total_current_stock.val()
			) / current_liabilities.val()
		);

		return this;
	}

	getLeverageRatio() {

		return this.leverage_ratio;
	}

	setLeverageRatio() {
		
		var current_liabilities = $('#current_liabilities');
		var total_equity = $('#share_capital');

		this.leverage_ratio = (
			current_liabilities.val() / total_equity.val()
		);

		return this;
	}

	getDebtToAssetsRatio() {

		return this.debt_to_assets_ratio;
	}

	setDebtToAssetsRatio() {
		
		var current_liabilities = $('#current_liabilities');
		var total_current_assets = $('#current_assets');

		this.debt_to_assets_ratio = (
			current_liabilities.val() / total_current_assets.val()
		);

		return this;
	}

	getGrossProfitMargin() {

		return this.gross_profit_margin;
	}

	setGrossProfitMargin() {
		
		var gross_profit = $('#gross_profit');
		var sales = $('#sales');

		this.gross_profit_margin = (
			gross_profit.val() / sales.val()
		) * 100;

		return this;
	}

	getNetProfitMargin() {

		return this.net_profit_margin;
	}

	setNetProfitMargin() {
		
		var net_profit_before_tax = $('#net_profit_before_tax');
		var sales = $('#sales');

		this.net_profit_margin = (
			net_profit_before_tax.val() / sales.val()
		) * 100;

		return this;
	}

	getDayStock() {

		return this.days_stock;
	}

	setDayStock() {
		
		var stock_or_inventory = $('#stock_or_inventory');
		var cost_of_goods_sold = $('#cost_of_goods_sold');
		
		this.days_stock = (
			stock_or_inventory.val() / cost_of_goods_sold.val()
		) * 365;

		return this;
	}

	getDayTradeDebtors() {

		return this.days_trade_debtors;
	}

	setDayTradeDebtors() {
		
		var trade_debtors = $('#trade_debtors');
		var sales = $('#sales');

		this.days_trade_debtors = (
			trade_debtors.val() / sales.val()
		) * 365;

		return this;
	}

	getDayTradeCreditor() {

		return this.days_trade_creditor;
	}

	setDayTradeCreditor() {
		
		var trade_creditors = $('#trade_creditors');	
		var purchases = $('#purchases');

		this.days_trade_creditor = (
			trade_creditors.val() / purchases.val()
		) * 365;

		return this;
	}

	getReturnOnAssets() {

		return this.return_on_assets;
	}

	setReturnOnAssets() {
		
		var net_profit_before_tax = $('#net_profit_before_tax');
		var current_assets = $('#current_assets');

		this.return_on_assets = (
			net_profit_before_tax.val() / current_assets.val()
		) * 100;

		return this;
	}

	getReturnOnEquity() {

		return this.return_on_equity;
	}

	setReturnOnEquity() {
		
		var net_profit_before_tax = $('#net_profit_before_tax');
		var total_equity = $('#share_capital');

		this.return_on_equity = (
			net_profit_before_tax.val() / total_equity.val()
		) * 100;	

		return this;
	}

	calculate(callback=null) {

		this.setCurrentRatio();
		this.setQuickRatio();
		this.setLeverageRatio();
		this.setDebtToAssetsRatio();
		this.setGrossProfitMargin();
		this.setNetProfitMargin();
		this.setDayStock();
		this.setDayTradeDebtors();
		this.setDayTradeCreditor();
		this.setReturnOnAssets();
		this.setReturnOnEquity();

		if (callback instanceof Function) {

			callback(this);
		}
	}
}