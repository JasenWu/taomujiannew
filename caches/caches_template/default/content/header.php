<?php defined('IN_PHPCMS') or exit('No permission resources.'); ?><!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="X-UA-Compatible" content="IE=7" />
<title><?php if(isset($SEO['title']) && !empty($SEO['title'])) { ?><?php echo $SEO['title'];?><?php } ?><?php echo $SEO['site_title'];?></title>
<meta name="keywords" content="<?php echo $SEO['keyword'];?>">
<meta name="description" content="<?php echo $SEO['description'];?>">
<link href="<?php echo CSS_PATH;?>index.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="<?php echo JS_PATH;?>jquery.min.js"></script>

</head>
<body>
<header class="header">
	<div class="container">
		<div class="row">
			<div class="col-md-6">

				<img src="<?php echo IMG_PATH;?>subject/images/logo.png" class="img-responsive">
			</div>
			<div class="col-md-6">

				<div class="pull-right change-lan">
					<div class="f-oh lan">
						<a class="">
							<div class="icon chinese"></div>
							<b>中文版</b>
						</a>
						<a class="">
							<div class="icon english"></div>
							<b>ENGLISH</b>
						</a>
					</div>
					<div class="tel f-oh">
						<div class="tel-icon">TEL：</div>
						<div class="tel-num">86-21-5433357</div>
						</div>
				</div>
			</div>
		</div>
	</div>

</header>
<nav class="nav">
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<ul>
					<li class="pull-left">
						<a href="/">首页</a>
					</li>
					<li class="pull-left">
						<a href="/">公司简介</a>
					</li>
					<li class="pull-left">
						<a href="/">产品中心</a>
					</li>
					<li class="pull-left">
						<a href="/">成功案例</a>
					</li>
					<li class="pull-left">
						<a href="/">联系我们</a>
					</li>



				</ul>
			</div>
		</div>

	</div>
</nav>


 
</div>