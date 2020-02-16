import React from "react";
import PropTypes from "prop-types";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Paper from "@material-ui/core/Paper";
import Container from '@material-ui/core/Container';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { useStyles } from './styles';

function descendingComparator(a, b, orderBy) {
	if (b[orderBy] < a[orderBy]) {
		return -1;
	}
	if (b[orderBy] > a[orderBy]) {
		return 1;
	}
	return 0;
}

function getComparator(order, orderBy) {
	return order === "desc"
		? (a, b) => descendingComparator(a, b, orderBy)
		: (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
	const stabilizedThis = array.map((el, index) => [el, index]);
	stabilizedThis.sort((a, b) => {
		const order = comparator(a[0], b[0]);
		if (order !== 0) return order;
		return a[1] - b[1];
	});
	return stabilizedThis.map(el => el[0]);
}

const headCells = [
	{ id: "brand", numeric: true, disablePadding: false, label: "brand" },
	{ id: "model", numeric: true, disablePadding: false, label: "model" },
	{ id: "price", numeric: true, disablePadding: false, label: "price" },
	{ id: "cpu", numeric: true, disablePadding: false, label: "cpu" },
	{ id: "ram", numeric: true, disablePadding: false, label: "ram" },
	{ id: "type", numeric: true, disablePadding: false, label: "type" },
	{ id: "shape", numeric: true, disablePadding: false, label: "shape" }
];

function EnhancedTableHead(props) {
	const {
		classes,
		order,
		orderBy,
		onRequestSort
	} = props;

	const createSortHandler = property => event => {
		onRequestSort(event, property);
	};

	return (
		<TableHead>
			<TableRow>
				{headCells.map(headCell => (
					<TableCell
						key={headCell.id}
						align="center"
						padding={headCell.disablePadding ? "none" : "default"}
						sortDirection={orderBy === headCell.id ? order : false}
					>
						<TableSortLabel
							active={orderBy === headCell.id}
							direction={orderBy === headCell.id ? order : "asc"}
							onClick={createSortHandler(headCell.id)}
						>
						{headCell.label}
						{orderBy === headCell.id ? (
							<span className={classes.visuallyHidden}>
							{order === "desc" ? "sorted descending" : "sorted ascending"}
							</span>
						) : null}
						</TableSortLabel>
					</TableCell>
				))}
			</TableRow>
		</TableHead>
  	);
}

EnhancedTableHead.propTypes = {
	classes: PropTypes.object.isRequired,
	onRequestSort: PropTypes.func.isRequired,
	order: PropTypes.oneOf(["asc", "desc"]).isRequired,
	orderBy: PropTypes.string.isRequired,
	rowCount: PropTypes.number.isRequired
};



const RicohTable = props => {
    const { rows } = props;
	const classes = useStyles();
	const [order, setOrder] = React.useState('asc');
	const [orderBy, setOrderBy] = React.useState('calories');
	const [page, setPage] = React.useState(0);
	const [rowsPerPage, setRowsPerPage] = React.useState(10);
  
	const handleRequestSort = (event, property) => {
	  const isAsc = orderBy === property && order === 'asc';
	  setOrder(isAsc ? 'desc' : 'asc');
	  setOrderBy(property);
	};

	const totalPages = () => Math.ceil( rows.length / rowsPerPage );
  
	const handleChangePage = (event, newPage) => {
		const tPages = totalPages();
		switch (event) {
			case 'left':
				if( page > 0 ) setPage( page - 1 );
			break;
			case 'right':
				if( page < tPages - 1 ) setPage( page + 1 );
				break;
			case 'num':
				setPage(newPage);
				break;
		}
	};
  
	const handleChangeRowsPerPage = value => {
		setRowsPerPage(parseInt(value, 10));
		setPage(0);
	};

	const items = [];
	for(var i = 0; i < totalPages(); i++) { items.push(i); }

	return (
        <Container maxWidth="lg">
            <h1>Crear nuevo ordenador</h1>
			<div className={classes.root}>
				<Paper className={classes.paper}>
					<TableContainer>
						<Table
							className={classes.table}
							aria-labelledby="tableTitle"
							aria-label="enhanced table"
						>
							<EnhancedTableHead
								classes={classes}
								order={order}
								orderBy={orderBy}
								onRequestSort={handleRequestSort}
								rowCount={rows.length}
							/>
							<TableBody>
								{stableSort(rows, getComparator(order, orderBy))
								.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
								.map((row, index) => {
									return (
										<TableRow key={index}>
											<TableCell align="center">{row.brand}</TableCell>
											<TableCell align="center">{row.model}</TableCell>
											<TableCell align="center">{row.price}</TableCell>
											<TableCell align="center">{row.cpu}</TableCell>
											<TableCell align="center">{row.ram}</TableCell>
											<TableCell align="center">{row.type}</TableCell>
											<TableCell align="center">{row.shape}</TableCell>
										</TableRow>
									);
								})}
							</TableBody>
						</Table>
					</TableContainer>
					<div className={classes.pagination}>	
						<div>
							{
								rows.length > rowsPerPage &&
									<>
										<button onClick={ () => handleChangePage('left') }>
											<ChevronLeftIcon/>
										</button>
										{ items.map( item => <button key={item} onClick={ () => handleChangePage('num', item ) }> { item + 1 }</button>) }
										<button onClick={ () => handleChangePage('right') }>
											<ChevronRightIcon/>
										</button>
									</>
							}
						</div>
						<div>
							<button onClick={ () => handleChangeRowsPerPage(10) }>10</button>
							<button onClick={ () => handleChangeRowsPerPage(25) }>25</button>
							<button onClick={ () => handleChangeRowsPerPage(50) }>50</button>
							<button onClick={ () => handleChangeRowsPerPage(100) }>100</button>
						</div>
					</div>
				</Paper>
			</div>
	  	</Container>
	);
};

RicohTable.propTypes = {
    id : PropTypes.string,
    rows : PropTypes.array.isRequired
};

RicohTable.defaultProps = {
    id : 'id-table',
    rows: { brand:'', model:'', price:0, cpu:'', ram:0, type:'', shape:'' }
}

export default RicohTable;
