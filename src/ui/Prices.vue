<template>
	<div class="prices">
		<div class="container">
			<div class="prices__wrapper">
				<div class="prices__table">
					<table id="prices">
						<tr>
							<th>№ п/п</th>
							<th>Наименование работ</th>
							<th>Единица измерения</th>
							<th>Стоимость единицы, ₽</th>
						</tr>
						<tr>
							<td colspan="4"><b>Фальцевая кровля</b></td>
						</tr>
						<tr>
							<td>1</td>
							<td>Монтаж фальцевых панелей</td>
							<td>м<sup>2</sup></td>
							<td>1100</td>
						</tr>
						<tr>
							<td>2</td>
							<td>Устройство ендов</td>
							<td>м.п.</td>
							<td>650</td>
						</tr>
						<tr>
							<td>3</td>
							<td>Устройство флюгарки (вент. конек)</td>
							<td>м.п.</td>
							<td>1650</td>
						</tr>
						<tr>
							<td>4</td>
							<td>Изготовление и монтаж конька</td>
							<td>м.п.</td>
							<td>350</td>
						</tr>
						<tr>
							<td>5</td>
							<td>Изготовление и монтаж карнизных планок</td>
							<td>м.п.</td>
							<td>350</td>
						</tr>
						<tr>
							<td>6</td>
							<td>Монтаж примыканий к вент. шахте в фальцевой технологии</td>
							<td>шт.</td>
							<td>5000</td>
						</tr>
						<tr>
							<td>7</td>
							<td>Обустройство встроенного желоба на фальцевой кровле</td>
							<td>м.п.</td>
							<td>3000</td>
						</tr>

						<tr>
							<td colspan="4"><b>Керамическая и цементно-песчаная черепица</b></td>
						</tr>
						<tr>
							<td>1</td>
							<td>Монтаж керамической черепицы</td>
							<td>м<sup>2</sup></td>
							<td>800</td>
						</tr>
						<tr>
							<td>2</td>
							<td>Монтаж примыканий к стене/трубе</td>
							<td>м.п.</td>
							<td>400</td>
						</tr>
						<tr>
							<td>3</td>
							<td>Монтаж и устройство коньков</td>
							<td>м.п.</td>
							<td>450</td>
						</tr>
						<tr>
							<td>4</td>
							<td>Устройство ендов</td>
							<td>м.п.</td>
							<td>600</td>
						</tr>
						<tr>
							<td>5</td>
							<td>Изготовление и монтаж карнизных планок</td>
							<td>м.п.</td>
							<td>350</td>
						</tr>

						<tr>
							<td colspan="4"><b>Мягкая черепица</b></td>
						</tr>
						<tr>
							<td>1</td>
							<td>Монтаж битумной черепицы</td>
							<td>м<sup>2</sup></td>
							<td>400</td>
						</tr>
						<tr>
							<td>2</td>
							<td>Монтаж подкладочного ковра</td>
							<td>м<sup>2</sup></td>
							<td>100</td>
						</tr>
						<tr>
							<td>3</td>
							<td>Монтаж примыканий к трубе</td>
							<td>шт.</td>
							<td>2800</td>
						</tr>
						<tr>
							<td>4</td>
							<td>Монтаж примыканий к стене</td>
							<td>м.п.</td>
							<td>350</td>
						</tr>
						<tr>
							<td>5</td>
							<td>Монтаж коньков</td>
							<td>м.п.</td>
							<td>380</td>
						</tr>
						<tr>
							<td>6</td>
							<td>Устройство ендов</td>
							<td>м.п.</td>
							<td>550</td>
						</tr>
						<tr>
							<td>7</td>
							<td>Монтаж торцевых планок</td>
							<td>м.п.</td>
							<td>320</td>
						</tr>
						<tr>
							<td>8</td>
							<td>Монтаж карнизных планок</td>
							<td>м.п.</td>
							<td>320</td>
						</tr>

						<tr>
							<td colspan="4"><b>Водосточная система</b></td>
						</tr>
						<tr>
							<td>1</td>
							<td>Монтаж подвесного желоба</td>
							<td>м.п.</td>
							<td>400</td>
						</tr>
						<tr>
							<td>2</td>
							<td>Монтаж труб</td>
							<td>м.п.</td>
							<td>450</td>
						</tr>

						<tr>
							<td colspan="4"><b>Дополнительно</b></td>
						</tr>
						<tr>
							<td>1</td>
							<td>Монтаж снегозадержаний</td>
							<td>м.п.</td>
							<td>350</td>
						</tr>
						<tr>
							<td>2</td>
							<td>Монтаж ограждений</td>
							<td>м.п.</td>
							<td>750</td>
						</tr>
						<tr>
							<td>3</td>
							<td>Монтаж мансардных окон</td>
							<td>шт.</td>
							<td>9000</td>
						</tr>

						<tr>
							<td colspan="4"><b>Стоимость монтажа несущих конструкций и утепления</b></td>
						</tr>
						<tr>
							<td>1</td>
							<td>Монтаж мауэрлата</td>
							<td>м.п.</td>
							<td>75</td>
						</tr>
						<tr>
							<td>2</td>
							<td>Монтаж стропильной системы</td>
							<td>м<sup>2</sup></td>
							<td>850</td>
						</tr>
						<tr>
							<td>3</td>
							<td>Монтаж чернового потолка</td>
							<td>м<sup>2</sup></td>
							<td>150</td>
						</tr>
						<tr>
							<td>4</td>
							<td>Укладка пароизоляции</td>
							<td>м<sup>2</sup></td>
							<td>60</td>
						</tr>
						<tr>
							<td>5</td>
							<td>Укладка утеплителя (200-250 мм)</td>
							<td>м<sup>2</sup></td>
							<td>250</td>
						</tr>
						<tr>
							<td>6</td>
							<td>Укладка гидроизоляции</td>
							<td>м<sup>2</sup></td>
							<td>60</td>
						</tr>
						<tr>
							<td>7</td>
							<td>Монтаж контробрешетки</td>
							<td>м<sup>2</sup></td>
							<td>110</td>
						</tr>
						<tr>
							<td>8</td>
							<td>Монтаж разреженной обрешетки</td>
							<td>м<sup>2</sup></td>
							<td>200</td>
						</tr>
						<tr>
							<td>9</td>
							<td>Монтаж шаговой обрешетки</td>
							<td>м<sup>2</sup></td>
							<td>250</td>
						</tr>
						<tr>
							<td>10</td>
							<td>Устройство сплошного основания из фанеры</td>
							<td>м<sup>2</sup></td>
							<td>180</td>
						</tr>
						<tr>
							<td>11</td>
							<td>Септирование пиломатериалов</td>
							<td>м<sup>3</sup></td>
							<td>980</td>
						</tr>

						<tr>
							<td colspan="4"><b>Подшивка карнизного свеса</b></td>
						</tr>
						<tr>
							<td>1</td>
							<td>Изготовление и монтаж лобового декора</td>
							<td>м.п.</td>
							<td>500</td>
						</tr>
						<tr>
							<td>2</td>
							<td>Устройство подсистемы каркаса подшивки карниза</td>
							<td>м<sup>2</sup></td>
							<td>450</td>
						</tr>
						<tr>
							<td>3</td>
							<td>Монтаж несущих элементов карниза</td>
							<td>м<sup>2</sup></td>
							<td>450</td>
						</tr>
						<tr>
							<td>4</td>
							<td>Изготовление и монтаж сайдинга подшивки карниза</td>
							<td>м<sup>2</sup></td>
							<td>1500</td>
						</tr>

						<tr>
							<td colspan="4"><b>Дополнительно нашей компанией предоставляются следующие услуги:</b></td>
						</tr>
						<tr>
							<td colspan="3">– выезд специалиста на объект для замера кровли</td>
							<td>2000</td>
						</tr>
						<tr>
							<td colspan="3">– составление детальных смет с разделением на стоимость работ и стоимость
								материалов
							</td>
							<td>5000</td>
						</tr>
						<tr>
							<td colspan="3">– рекомендации проектировщикам по устройству «пирога» кровли и т.д.</td>
							<td></td>
						</tr>
					</table>
				</div>
				<p class="prices__description">
					Обращаем Ваше внимание, что цена на&nbsp;монтаж кровли, а&nbsp;также цена на&nbsp;все кровельные
					работы и&nbsp;строительство
					крыши в&nbsp;комплексе складывается из&nbsp;множества факторов. В&nbsp;зависимости от&nbsp;этажности,
					сложности работ, геометрии скатов, расположения строительного объекта&nbsp;&mdash; стоимость на&nbsp;услуги
					будет изменяться.
					<br><br>
					В&nbsp;таблице указаны минимальные цены для кровельных работ. Окончательная стоимость монтажа будет
					известна после получения от&nbsp;Вас данных, изучения проекта и&nbsp;выезда специалиста на&nbsp;объект.
				</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "Prices",
}
</script>

<style lang="scss">
.prices {
	&__wrapper {
		display: flex;
		padding: 160px 0 60px 0;
		font-family: $font-family-roboto-regular;
		font-size: 16px;
		line-height: 1.5;
	}

	&__table {
		margin-right: 50px;
	}

	&__description {
		max-width: 410px;
	}
}

#prices {
	border-collapse: collapse;
	width: 100%;

	td, th {
		border: solid 1px $color-main-dark;
		padding: 10px 12px 10px 12px;
	}

	tr:hover {
		background-color: #fdf6e6;
	}

	th {
		font-weight: 400;
		text-align: left;
	}
}

</style>
