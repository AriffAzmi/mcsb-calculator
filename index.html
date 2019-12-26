<!DOCTYPE html>
<html>
<head>
	<title>BUSINESS FINANCIAL HEALTH CHECK</title>
	<link rel="stylesheet" href="css/bootstrap.min.css">
</head>
<body>
	<div class="container">
		<div class="row">
			<div class="col-md-6 offset-md-3 mt-3">
				<div class="card text-center">
				  	<div class="card-header bg-primary" style="color: white;">
				    	BUSINESS FINANCIAL HEALTH CHECK CALCULATOR
				  	</div>
				  	<div class="card-body">
				    	<h5 class="card-title">Please fill in the form below:</h5>
				    	<form id="calculatorform">
					    	<div class="form-group">
					    		<label>Sales</label>
					    		<input type="number" name="sales" id="sales" class="form-control">
					    	</div>
					    	<div class="form-group">
					    		<label>GROSS PROFIT</label>
					    		<input type="number" name="gross_profit" id="gross_profit" class="form-control">
					    	</div>
					    	<div class="form-group">
					    		<label>NET PROFIT BEFORE TAX</label>
					    		<input type="number" name="net_profit_before_tax" id="net_profit_before_tax" class="form-control">
					    	</div>
					    	<div class="form-group">
					    		<label>NON-CURRENT ASSETS</label>
					    		<input type="number" name="non_current_assets" id="non_current_assets" class="form-control">
					    	</div>
					    	<div class="form-group">
					    		<label>CURRENT ASSETS</label>
					    		<input type="number" name="current_assets" id="current_assets" class="form-control">
					    	</div>
					    	<div class="form-group">
					    		<label>STOCK/INVENTORY</label>
					    		<input type="number" name="stock_or_inventory" id="stock_or_inventory" class="form-control">
					    	</div>
					    	<div class="form-group">
					    		<label>COST OF GOODS SOLD</label>
					    		<input type="number" name="cost_of_goods_sold" id="cost_of_goods_sold" class="form-control">
					    	</div>
					    	<div class="form-group">
					    		<label>PURCHASES</label>
					    		<input type="number" name="purchases" id="purchases" class="form-control">
					    	</div>
					    	<div class="form-group">
					    		<label>NON-CURRENT LIABILITIES</label>
					    		<input type="number" name="non_current_liabilities" id="non_current_liabilities" class="form-control">
					    	</div>
					    	<div class="form-group">
					    		<label>CURRENT LIABILITIES</label>
					    		<input type="number" name="current_liabilities" id="current_liabilities" class="form-control">
					    	</div>
					    	<div class="form-group">
					    		<label>TRADE DEBTORS</label>
					    		<input type="number" name="trade_debtors" id="trade_debtors" class="form-control">
					    	</div>
					    	<div class="form-group">
					    		<label>TRADE CREDITORS</label>
					    		<input type="number" name="trade_creditors" id="trade_creditors" class="form-control">
					    	</div>
					    	<div class="form-group">
					    		<label>SHARE CAPITAL/CAPITAL</label>
					    		<input type="number" name="share_capital" id="share_capital" class="form-control">
					    	</div>
					    	<div class="form-group">
					    		<label>RETAINED EARNINGS</label>
					    		<input type="number" name="retained_earnings" id="retained_earnings" class="form-control">
					    	</div>
					    	<!-- <p class="card-text">With supporting text below as a natural lead-in to additional content.</p> -->
					    	<div class="alert alert-success">
					    		<h6>Grand Total Score: </h6>
					    		<p>4.80 (VERY HEALTHY & STRONG)</p>
					    	</div>
					    </form>
				    	<a href="javascript:;" class="btn btn-primary" onclick="doCalculate()">Calculate</a>
				  	</div>
				  	<div class="card-footer text-muted">
				    	Copyright &copy; 2019, Commerze Capital Sdn Bhd (788863-T)
				  	</div>
				</div>
			</div>
		</div>
	</div>
	<script src="js/jquery.min.js"></script>
	<script src="js/bootstrap.min.js"></script>
	<script src="js/calculator.js"></script>
	<script>
	
		var is_valid_form=false;
		function isFormValid() {
			
			var inputs = $('#calculatorform').find('input');

			console.log(inputs);
			$.each(inputs, function(index, el) {
				
				if ($(el).val()!="") {

					$(el).removeClass('is-invalid');
					$(el).addClass('is-valid');
					is_valid_form=true;
					// return true;
				}
				else {

					$(el).removeClass('is-valid');
					$(el).addClass('is-invalid');
					is_valid_form=false;
					// return false;
				}

			});
		}
		function doCalculate() {
			
			isFormValid();

			// console.log(is_valid_form);
			if (is_valid_form) {

				var calculator = new Calculator();
				calculator.calculate(function(obj) {
					
					var grand_total_score = 0;
					$.each(obj, function(index, val) {
						
						grand_total_score = (grand_total_score+val);
					});

					grand_total_score = (grand_total_score/11);
					console.log(grand_total_score);
				});

				console.log("CURRENT RATIO: "+calculator.getCurrentRatio());
				console.log("QUICK RATIO: "+calculator.getQuickRatio());
				console.log("LEVERAGE RATIO: "+calculator.getLeverageRatio());
				console.log("DEBTS TO ASSETS RATIO: "+calculator.getDebtToAssetsRatio());
				console.log("GROSS PROFIT MARGIN (%): "+calculator.getGrossProfitMargin());
				console.log("NET PROFIT MARGIN (%): "+calculator.getNetProfitMargin());
				console.log("DAYS STOCK (DAYS): "+calculator.getDayStock());
				console.log("DAYS TRADE DEBTORS (DAYS): "+calculator.getDayTradeDebtors());
				console.log("DAYS TRADE CREDITOR (DAYS): "+calculator.getDayTradeCreditor());
				console.log("RETURN ON ASSETS (%): "+calculator.getReturnOnAssets());
				console.log("RETURN ON EQUITY (%): "+calculator.getReturnOnEquity());
			}
		}
	</script>
</body>
</html>