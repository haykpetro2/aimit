import MainLayout from '../../components/MainLayout';
import { pageClass } from '../../constants/constants';
import { Controller } from './Controller';
import { View } from './View';

export default MainLayout(Controller(View), pageClass.moulkCrm);
